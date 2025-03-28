const express = require('express');
const router = express.Router();
const DemandeRDV = require('../model/DemandeRDV');
const { app } = require('../server');

const limit = 10;

//Create a DemandeRDV
router.post('/', async (req, res) => {
    try{
        const demandeRDV = new DemandeRDV(req.body);
        await demandeRDV.save();
        res.status(201).json(demandeRDV);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Search for demandes with pagination
router.post('/search/:page', async (req, res) => {
    try {
        const count = await DemandeRDV.countDocuments();
        const demandesRDV = await DemandeRDV.find(req.body)
            .populate('idClient')
            .populate('idGarage')
            .sort([['dateHeure',1],['demandesRDV.status',-1]])
            .skip((req.params.page - 1)*limit)
            .limit(limit);
        
        const response = {
            status : 200,
            nombreElement : demandesRDV.length,
            page : parseInt(req.params.page),
            pageMax : parseInt((count/limit)+1),
            demandesRDV : demandesRDV.map(demandeRDV => ({
                idClient : demandeRDV.idClient,
                idGarage : demandeRDV.idGarage,
                dateHeure : demandeRDV.dateHeure,
                status : demandeRDV.status,
                _id : demandeRDV._id,
                createdAt : demandeRDV.createdAt,
                updatedAt : demandeRDV.updatedAt,
                __v: demandeRDV.__v
            }))
        };

        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Read all DemandeRDVs
router.get('/', async (req, res) => {
    try{
        const demandesRDV = await DemandeRDV.find();
        res.json(demandesRDV);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get one demande rendez-vous by id
router.get('/:id', async (req, res) => {
    try {
        const demandeRDV = await DemandeRDV.findById(req.params.id)
            .populate("idClient")
            .populate("idGarage");
        res.json(demandeRDV);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Update a DemandeRDV by id
router.put('/:id', async (req, res) => {
    try{
        const demandeRDV = await DemandeRDV.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(demandeRDV);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Delete a DemandeRDV by id
router.delete('/:id', async (req, res) => {
    try {
        await DemandeRDV.findByIdAndDelete(req.params.id);
        res.json({ message: "DemandeRDV deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
