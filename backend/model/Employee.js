const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    username : {type: String, require: true, unique: true},
    motdepasse : {type: String, require: true},
    nom : {type: String, require: true},
    prenom : {type: String, require: true},
    tel : {type: String, require: true},
    idRole : {type : mongoose.Schema.ObjectId, require: true, ref : 'Role'},
    idGarage: {type: mongoose.Schema.ObjectId, require: true, ref : 'Garage'},
    estActif : {type: Boolean, default : true}
}, { timestamps: true }, {collection: 'employee'});

module.exports = mongoose.model('Employee', EmployeeSchema);