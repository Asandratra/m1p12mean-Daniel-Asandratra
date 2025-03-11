const express = require('express');
const router = express.Router();
const Client = require('../model/Client');

//Create a Client
router.post('/', async (req, res) => {
    try{
        const client = new Client(req.body);
        await client.save();
        res.status(201).json(client);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Read all Client-es
router.get('/', async (req, res) => {
    try{
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update a Client by id
router.put('/:id', async (req, res) => {
    try{
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(client);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Delete a Client by id
router.delete('/:id', async (req, res) => {
    try {
        await Client.findByIdAndDelete(req.params.id);
        res.json({ message: "Client deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;