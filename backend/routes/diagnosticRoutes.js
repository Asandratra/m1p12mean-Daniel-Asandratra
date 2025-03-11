const express = require('express');
const router = express.Router();
const Diagnostic = require('../model/Diagnostic');

//Create a Diagnostic
router.post('/', async (req, res) => {
    try{
        const diagnostic = new Diagnostic(req.body);
        await diagnostic.save();
        res.status(201).json(diagnostic);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Read all Diagnostics
router.get('/', async (req, res) => {
    try{
        const diagnostics = await Diagnostic.find();
        res.json(diagnostics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update a Diagnostic by id
router.put('/:id', async (req, res) => {
    try{
        const diagnostic = await Diagnostic.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(diagnostic);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Delete a Diagnostic by id
router.delete('/:id', async (req, res) => {
    try {
        await Diagnostic.findByIdAndDelete(req.params.id);
        res.json({ message: "Diagnostic deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;