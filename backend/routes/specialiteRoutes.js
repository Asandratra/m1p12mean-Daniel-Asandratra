const express = require('express');
const router = express.Router();
const Specialite = require('../model/Specialite');

//Create a Specialite
router.post('/', async (req, res) => {
    try{
        const check = await Specialite.find(req.body);
        if(check) throw new Error("Spécialité déjà enregistré");
        const specialite = new Specialite(req.body);
        await specialite.save();
        res.status(201).json(specialite);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Read all Specialites
router.get('/', async (req, res) => {
    try{
        const specialites = await Specialite.find();
        res.json(specialites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update a Specialite by id
router.put('/:id', async (req, res) => {
    try{
        const specialite = await Specialite.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(specialite);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Delete a Specialite by id
router.delete('/:id', async (req, res) => {
    try {
        await Specialite.findByIdAndDelete(req.params.id);
        res.json({ message: "Specialite deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;