const express = require('express');
const router = express.Router();
const Conge = require('../model/Conge');

//Create a Conge
router.post('/', async (req, res) => {
    try{
        const conge = new Conge(req.body);
        await conge.save();
        res.status(201).json(conge);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Read all Conges
router.get('/', async (req, res) => {
    try{
        const conges = await Conge.find();
        res.json(conges);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update a Conge by id
router.put('/:id', async (req, res) => {
    try{
        const conge = await Conge.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(conge);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Delete a Conge by id
router.delete('/:id', async (req, res) => {
    try {
        await Conge.findByIdAndDelete(req.params.id);
        res.json({ message: "Conge deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;