const express = require('express');
const router = express.Router();
const Garage = require('../model/Garage');
const Employee = require('../model/Employee');

const limit = 10;

//Create a Garage
router.post('/', async (req, res) => {
    try{
        const garage = new Garage(req.body);
        await garage.save();
        res.status(201).json(garage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Search for garages with pagination
router.post('/search/:page', async (req, res) => {
    try {
        const count = await Garage.countDocuments();
        const garages = await Garage.find(req.body)
            .skip((req.params.page - 1)*limit)
            .limit(limit);
        
        const response = {
            status : 200,
            nombreElement : garages.length,
            nombreMaxElement : count,
            page : parseInt(req.params.page),
            pageMax : parseInt((count/limit)+1),
            garages : garages.map(garage => ({
                localisation : garage.localisation,
                place : garage.place,
                _id : garage._id,
                createdAt : garage.createdAt,
                updatedAt : garage.updatedAt,
                __v: garage.__v
            }))
        };

        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Read all Garages
router.get('/', async (req, res) => {
    try{
        const garages = await Garage.find();
        res.json(garages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get one garage by id
router.get('/:id', async (req, res) => {
    try {
        const garage = await Garage.findById(req.params.id);
        res.json(garage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get one garage by id as client
router.get('/asClient/:id', async (req, res) => {
    try {
        const garage = await Garage.findById(req.params.id)
            .populate({
                path : 'employees',
                match : { idRole : "67d15b7442ec1c24c28bcd2a", estActif : true },
                limit : 1
            })
            .lean();
        res.json(garage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get one garage by id as manager or admin
router.get('/asManager/:id', async (req, res) => {
    try {
        const garage = await Garage.findById(req.params.id)
            .populate({
                path : 'demandesRDV',
                match : { status : { $lt : 2 } },
                populate : {
                    path : 'idClient'
                }
            })
            .sort([['dateHeure',1],['demandesRDV.status',-1]])
            .lean();
        res.json(garage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update a Garage by id
router.put('/:id', async (req, res) => {
    try{
        const garage = await Garage.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(garage);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Delete a Garage by id
router.delete('/:id', async (req, res) => {
    try {
        await Garage.findByIdAndDelete(req.params.id);
        res.json({ message: "Garage deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;