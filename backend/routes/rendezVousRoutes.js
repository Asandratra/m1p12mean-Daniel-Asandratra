const express = require('express');
const router = express.Router();
const RendezVous = require('../model/RendezVous');

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