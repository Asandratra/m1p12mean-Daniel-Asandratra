const express = require('express');
const router = express.Router();
const DemandeRDV = require('../model/DemandeRDV');
const { app } = require('../server');

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

//Read all DemandeRDVs
router.get('/', async (req, res) => {
    try{
        const demandesRDV = await DemandeRDV.find();
        res.json(demandesRDV);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

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
