const express = require('express');
const router = express.Router();
const Employee = require('../model/Employee');

const limit=10;

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

//Trouver un employee par son username, et par le mot de passe crypter
router.post('/signup', async (req, res) => {
    try {
        var username = req.body.username;
        var motdepasse = req.body.motdepasse;
        const employee = await Employee.findOne({
            username : `${username}`,
            estActif : true
        })
            .populate('idRole')
            .populate('idGarage');
        if(!employee) throw new Error("Pseudo ou mot de passe incorrecte.");
        if(employee){
            employee.checkMotDePasse(motdepasse, function(err, isMatch) {
                if(err) throw err;
                if(!isMatch) res.status(400).json({ message : "Pseudo ou mot de passe incorrecte."});
                if(isMatch) res.status(201).json(employee);
            })
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//Inscription de client avec un check de mot de passe
router.post('/signin', async (req, res) => {
    try {
        var newEmployee = new Employee({
            username : req.body.username,
            motdepasse : req.body.motdepasse,
            nom : req.body.nom,
            prenom : req.body.prenom,
            tel : req.body.tel,
            idRole : req.body.idRole,
            idGarage : req.body.idGarage
        });
        var secondMotDePasse = req.body.secondMotDePasse;

        if(newEmployee.motdepasse!==secondMotDePasse) throw new Error("Veuillez vous assurer de bien définir le mot de passe");
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//Search for employees with pagination
router.post('/search/:page', async (req, res) => {
    try {
        const maintenant = new Date();
        maintenant.setHours(0,0,0,0);

        const count = await Employee.countDocuments(req.body);
        const employees = await Employee.find(req.body)
            .populate('idRole')
            .populate({
                path:'salaire',
                match:{'date': { $lte : maintenant }},
                options:{'sort':{'date':-1},'limit':1}
            })
            .skip((req.params.page - 1)*limit)
            .limit(limit);
        
        const response = {
            status : 200,
            nombreElement : employees.length,
            nombreMaxElement : count,
            page : parseInt(req.params.page),
            pageMax : parseInt((count/limit)+1),
            employees : employees.map(employee => ({
                username : employee.username,
                motdepasse : employee.motdepasse,
                nom : employee.nom,
                prenom : employee.prenom,
                tel : employee.tel,
                idRole : employee.idRole,
                idGarage: employee.idGarage,
                estActif : employee.estActif,
                salaire : employee.salaire[0],
                _id : employee._id,
                createdAt : employee.createdAt,
                updatedAt : employee.updatedAt,
                __v: employee.__v
            }))
        };

        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Read all Employees
router.get('/', async (req, res) => {
    try{
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get Details employee by id as manager
router.get('/asManager/:id', async (req,res)=>{
    try {
        const maintenant= new Date();
        maintenant.setHours(0,0,0,0);

        const employee = await Employee.findById(req.params.id)
            .populate('idRole')
            .populate({
                path:'conges',
                match:{'fin':{ $gte : maintenant }},
                options:{'sort':{'debut':1}}
            })
            .populate({
                path:'salaire',
                match:{'date': { $lte : maintenant }},
                options:{'sort':{'date':-1},'limit':1}
            })
            .populate({
                path:'specialities',
                populate:{
                    path:'idService'
                }
            })
            .lean();
        res.json(employee);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

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