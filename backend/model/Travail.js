const mongoose = require('mongoose');

const TravailSchema = new mongoose.Schema({
    idClient : {type: mongoose.Schema.ObjectId, ref: "Client", require: false},
    matricule : {type: String, require: true},
    debutTravail : {type: Date, require: true},
    idGarage : {type: mongoose.Schema.ObjectId, ref: "Garage", require: true},
    prix : {type: Number, require: true},
    status : {type: Number, default: 0},
    selectedService: [{ type: mongoose.Schema.ObjectId, ref: "Service" }],
    selectedMecanicien: [{ type: mongoose.Schema.ObjectId, ref: "Employee" }]
}, { timestamps: true }, {collection: 'travail'});

module.exports = mongoose.model('Travail', TravailSchema);