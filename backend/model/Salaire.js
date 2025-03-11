const mongoose = require('mongoose');

const SalaireSchema = new mongoose.Schema({
    idEmployee : {type: mongoose.Schema.ObjectId, require: true, ref: 'Employee'},
    date : {type: Date, require: true},
    montant : {type: Number, require: true}
}, { timestamps: true }, {collection: 'salaire'});

module.exports = mongoose.model('Salaire', SalaireSchema);