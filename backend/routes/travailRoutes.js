const express = require('express');
const router = express.Router();
const Travail = require('../model/Travail');

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

//Read all Travaux
router.get('/', async (req, res) => {
    try{
        const travaux = await Travail.find();
        res.json(travaux);
    } catch (error) {
        res.status(500).json({ message: error.message });
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