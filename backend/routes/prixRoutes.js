const express = require('express');
const router = express.Router();
const Prix = require('../model/Prix');

//Create a Prix
router.post('/', async (req, res) => {
    try{
        const prix = new Prix(req.body);
        await prix.save();
        res.status(201).json(prix);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Read all Prix
router.get('/', async (req, res) => {
    try{
        const prix = await Prix.find();
        res.json(prix);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update a Prix by id
router.put('/:id', async (req, res) => {
    try{
        const prix = await Prix.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(prix);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Delete a Prix by id
router.delete('/:id', async (req, res) => {
    try {
        await Prix.findByIdAndDelete(req.params.id);
        res.json({ message: "Prix deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;