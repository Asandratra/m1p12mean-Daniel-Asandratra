const express = require('express');
const router = express.Router();
const Payement = require('../model/Payement');

//Create a Payement
router.post('/', async (req, res) => {
    try{
        const payement = new Payement(req.body);
        await payement.save();
        res.status(201).json(payement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Read all Payements
router.get('/', async (req, res) => {
    try{
        const payements = await Payement.find();
        res.json(payements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update a Payement by id
router.put('/:id', async (req, res) => {
    try{
        const payement = await Payement.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(payement);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Delete a Payement by id
router.delete('/:id', async (req, res) => {
    try {
        await Payement.findByIdAndDelete(req.params.id);
        res.json({ message: "Payement deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;