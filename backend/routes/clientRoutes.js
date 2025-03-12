const express = require('express');
const router = express.Router();
const Client = require('../model/Client');
const { Error } = require('mongoose');

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

//Trouver un client par son username, et par le mot de passe crypter
router.post('/signup', async (req, res) => {
    try {
        var username = req.body.username;
        var motdepasse = req.body.motdepasse;
        const client = await Client.findOne({ username : `${username}`});
        if(!client) throw new Error("Pseudo ou mot de passe incorrecte.");
        if(client){
            client.checkMotDePasse(motdepasse, function(err, isMatch) {
                if(err) throw err;
                if(!isMatch) res.status(400).json({ message : "Pseudo ou mot de passe incorrecte."});
                if(isMatch) res.status(201).json(client);
            })
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//Inscription de client avec un check de mot de passe
router.post('/signin', async (req, res) => {
    try {
        var newClient = new Client({
            username : req.body.username,
            motdepasse : req.body.motdepasse,
            nom : req.body.nom,
            prenom : req.body.prenom,
            tel : req.body.tel
        });
        var secondMotDePasse = req.body.secondMotDePasse;

        if(newClient.motdepasse!==secondMotDePasse) throw new Error("Veuillez vous assurer de bien définir le mot de passe");
        await newClient.save();
        res.status(201).json(newClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

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