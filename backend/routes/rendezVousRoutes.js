const express = require('express');
const router = express.Router();
const RendezVous = require('../model/RendezVous');

const limit = 10;

//Create a RendezVous
router.post('/', async (req, res) => {
    try{
        const rendezVous = new RendezVous(req.body);
        await rendezVous.save();
        res.status(201).json(rendezVous);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Get 10 next rendez-vous of a garage
router.post('/next-rendez-vous/:idGarage', async (req, res) => {
    try{
        const filter = {
            idGarage : req.params.idGarage,
            dateHeure : {
                $gte : new Date()
            },
            status : 0
        }
        const rendezVous = await RendezVous.find(filter)
            .limit(10)
            .sort({dateHeure:1})
            .populate('idClient')
            .populate('idGarage');
        res.json(rendezVous);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//Search for rendez-vous with pagination
router.post('/search/:page', async (req, res) => {
    try {
        const count = await RendezVous.countDocuments(req.body);
        const rendezVous = await RendezVous.find(req.body)
            .populate('idClient')
            .populate('idGarage')
            .sort([['dateHeure',1],['demandesRDV.status',-1]])
            .skip((req.params.page - 1)*limit)
            .limit(limit);
        
        const response = {
            status : 200,
            nombreElement : rendezVous.length,
            page : parseInt(req.params.page),
            pageMax : parseInt((count/limit)+1),
            rendezVous : rendezVous.map(rendezVous => ({
                idClient : rendezVous.idClient,
                idGarage : rendezVous.idGarage,
                dateHeure : rendezVous.dateHeure,
                status : rendezVous.status,
                _id : rendezVous._id,
                createdAt : rendezVous.createdAt,
                updatedAt : rendezVous.updatedAt,
                __v: rendezVous.__v
            }))
        };

        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Read all RendezVous-es
router.get('/', async (req, res) => {
    try{
        const rendezVous = await RendezVous.find();
        res.json(rendezVous);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update a RendezVous by id
router.put('/:id', async (req, res) => {
    try{
        const rendezVous = await RendezVous.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(rendezVous);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Delete a RendezVous by id
router.delete('/:id', async (req, res) => {
    try {
        await RendezVous.findByIdAndDelete(req.params.id);
        res.json({ message: "RendezVous deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;