const express = require('express');
const router = express.Router();
const Travail = require('../model/Travail');
const Prix = require('../model/Prix');
const { findById } = require('../model/RendezVous');
const Payement = require('../model/Payement');

const limit = 10;

//Create a Travail
router.post('/', async (req, res) => {
    try{
        const travail = new Travail(req.body);
        await travail.save();
        res.status(201).json(travail);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Search for travail with pagination
router.post('/search/:page', async (req, res) => {
    try {
        const count = await Travail.countDocuments(req.body);
        const travauxTab = [];
        const travaux = await Travail.find(req.body)
            .populate('idClient')
            .populate('idGarage')
            .populate({
                path: 'selectedService',
                select: 'duree'
            })
            .sort([['debutTravail',1]])
            .skip((req.params.page - 1) * limit)
            .limit(limit);
        for(let travail of travaux) {
            const totalDuree = travail.selectedService.reduce((sum, service) => sum + (service.duree || 0), 0);
            let finEstimation = null;
            if (travail.debutTravail) {
                finEstimation = new Date(travail.debutTravail);
                finEstimation.setMinutes(finEstimation.getMinutes() + totalDuree);
            }
            const totalPayerResult = await Payement.aggregate([
                { $match: { idTravail: travail._id } },
                { $group: { _id: null, totalPayer: { $sum: "$montant" } } }
            ]);
            const totalPayer = totalPayerResult.length > 0 ? totalPayerResult[0].totalPayer : 0;
            travauxTab.push({
                ...travail._doc,
                totalDuree,
                finEstimation,
                totalPayer,
            })
        }
        const response = {
            pageMax: Math.ceil(count / limit),
            travaux: travauxTab
        }
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Read travail by id
router.get('/:id', async (req, res) => {
    try{
        const travail = await Travail.findById(req.params.id)
            .populate('idClient')
            .populate('idGarage')
            .populate('selectedService')
            .populate('selectedMecanicien')
        const totalDuree = travail.selectedService.reduce((sum, service) => sum + (service.duree || 0), 0);
        let finEstimation = null;
        if (travail.debutTravail) {
            finEstimation = new Date(travail.debutTravail);
            finEstimation.setMinutes(finEstimation.getMinutes() + totalDuree);
        }
        const serviceTab = [];
        for (const service of travail.selectedService) {
            const latestPrix = await Prix.findOne({ idService: service._id })
                .sort({ date: -1 }) // Sort by date (descending) to get the latest price
                .select('montant'); // Select only the montant field
            serviceTab.push({
                ...service._doc,
                prix: latestPrix ? latestPrix.montant : null,
            })
        }
        const totalPayerResult = await Payement.aggregate([
            { $match: { idTravail: travail._id } },
            { $group: { _id: null, totalPayer: { $sum: "$montant" } } }
        ]);
        const totalPayer = totalPayerResult.length > 0 ? totalPayerResult[0].totalPayer : 0;
        const selectedTravail = {
            ...travail._doc,
            totalDuree,
            finEstimation,
            selectedService: serviceTab,
            totalPayer,
        }
        res.json(selectedTravail);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Read all Travaux
router.get('/', async (req, res) => {
    try{
        const travaux = await Travail.find();
        res.json(travaux);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const populateTravail = async (id) => {
    const travail = await Travail.findById(id)
        .populate('idClient')
        .populate('selectedService')
        .populate('selectedMecanicien')
    const totalDuree = travail.selectedService.reduce((sum, service) => sum + (service.duree || 0), 0);
    let finEstimation = null;
    if (travail.debutTravail) {
        finEstimation = new Date(travail.debutTravail);
        finEstimation.setMinutes(finEstimation.getMinutes() + totalDuree);
    }
    const serviceTab = [];
    for (const service of travail.selectedService) {
        const latestPrix = await Prix.findOne({ idService: service._id })
            .sort({ date: -1 }) // Sort by date (descending) to get the latest price
            .select('montant'); // Select only the montant field
        serviceTab.push({
            ...service._doc,
            prix: latestPrix ? latestPrix.montant : null,
        })
    }
    return {
        ...travail._doc,
        totalDuree,
        finEstimation,
        selectedService: serviceTab
    }
}

//add service to travail
router.put('/addServices/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const travail = await Travail.findById(id)
        travail.selectedService = [...new Set([...travail.selectedService, ...req.body])];
        const prices = await Prix.aggregate([
            { $match: { idService: { $in: travail.selectedService } } },
            { $sort: { date: -1 } }, // Get the latest price by sorting descending
            { 
                $group: { 
                    _id: "$idService", 
                    latestPrice: { $first: "$montant" } 
                } 
            }
        ]);
        travail.prix = prices.reduce((sum, p) => sum + (p.latestPrice || 0), 0);
        await travail.save();
        const updatedTravail = await populateTravail(id);
        res.json(updatedTravail);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//add mecano to travail
router.put('/addMecano/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const travail = await Travail.findById(id)
        travail.selectedMecanicien = [...new Set([...travail.selectedMecanicien, ...req.body])];
        await travail.save();
        const updatedTravail = await populateTravail(id);
        res.json(updatedTravail);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Update a Travail by id
router.put('/:id', async (req, res) => {
    try{
        const travail = await Travail.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(travail);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Delete a Travail by id
router.delete('/:id', async (req, res) => {
    try {
        await Travail.findByIdAndDelete(req.params.id);
        res.json({ message: "Travail deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;