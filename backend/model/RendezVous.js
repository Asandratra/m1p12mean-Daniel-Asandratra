const mongoose = require('mongoose');

const RendezVousSchema = new mongoose.Schema({
    idClient : {type: mongoose.Schema.ObjectId, require: true, ref: 'Client'},
    idGarage : {type: mongoose.Schema.ObjectId, require: true, ref: 'Garage'},
    dateHeure : {type: Date, require: true},
    status : {type: Number, default: 0}
}, { timestamps: true }, {collection: 'rendezVous'});

module.exports = mongoose.model('RendezVous', RendezVousSchema);