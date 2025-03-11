const express = require('express');
const router = express.Router();
const Employee = require('../model/Employee');

//Create an Employee
router.post('/', async (req, res) => {
    try{
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Read all Employees
router.get('/', async (req, res) => {
    try{
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update an Employee by id
router.put('/:id', async (req, res) => {
    try{
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(employee);
    } catch (error) {
        res.status(400).json({ massage: error.message });
    }
});

//Delete an Employee by id
router.delete('/:id', async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: "Employee deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;