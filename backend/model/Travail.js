const mongoose = require('mongoose');

const TravailSchema = new mongoose.Schema({
    nomClient : {type: String, require: true},
    telClient : {type: String, require: true},
    matricule : {type: String, require: true},
    debutTravail : {type: Date, require: true},
    idGarage : {type: mongoose.Schema.ObjectId, ref: "Garage", require: true},
    prix : {type: Number, require: true},
    status : {type: Number, default: 0},
    idClient : {type: mongoose.Schema.ObjectId, ref: "Client", require: false}
}, { timestamps: true }, {collection: 'travail'});

module.exports = mongoose.model('Travail', TravailSchema);