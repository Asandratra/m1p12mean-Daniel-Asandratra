const express = require('express');
const router = express.Router();
const Affiliation = require('../model/Affiliation');

//Create an Affiliation
router.post('/', async (req, res) => {
    try{
        const affiliation = new Affiliation(req.body);
        await affiliation.save();
        res.status(201).json(affiliation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Read all Affiliations
router.get('/', async (req, res) => {
    try{
        const affiliations = await Affiliation.find();
        res.json(affiliations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update an Affiliation by id
router.put('/:id', async (req, res) => {
    try{
        const affiliation = await Affiliation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(affiliation);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Delete an Affiliation by id
router.delete('/:id', async (req, res) => {
    try {
        await Affiliation.findByIdAndDelete(req.params.id);
        res.json({ message: "Affiliation deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;