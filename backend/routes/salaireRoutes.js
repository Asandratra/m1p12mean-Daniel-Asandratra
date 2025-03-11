const express = require('express');
const router = express.Router();
const Salaire = require('../model/Salaire');

//Create a Salaire
router.post('/', async (req, res) => {
    try{
        const salaire = new Salaire(req.body);
        await salaire.save();
        res.status(201).json(salaire);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Read all Salaires
router.get('/', async (req, res) => {
    try{
        const salaires = await Salaire.find();
        res.json(salaires);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update a Salaire by id
router.put('/:id', async (req, res) => {
    try{
        const salaire = await Salaire.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(salaire);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Delete a Salaire by id
router.delete('/:id', async (req, res) => {
    try {
        await Salaire.findByIdAndDelete(req.params.id);
        res.json({ message: "Salaire deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;