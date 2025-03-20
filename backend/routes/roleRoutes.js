const express = require('express');
const router = express.Router();
const Role = require('../model/Role');

//Create a Role
router.post('/', async (req, res) => {
    try{
        const role = new Role(req.body);
        await role.save();
        res.status(201).json(role);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Search for Roles
router.post('/search', async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//Read all Roles
router.get('/', async (req, res) => {
    try{
        const roles = await Role.find();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update a Role by id
router.put('/:id', async (req, res) => {
    try{
        const role = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(role);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Delete a Role by id
router.delete('/:id', async (req, res) => {
    try {
        await Role.findByIdAndDelete(req.params.id);
        res.json({ message: "Role deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;