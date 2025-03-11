const mongoose = require('mongoose');

const SpecialiteSchema = new mongoose.Schema({
    idEmployee : {type: mongoose.Schema.ObjectId, require: true, ref: 'Employee'},
    idService : { type: mongoose.Schema.ObjectId, require: true, ref: 'Service'}
}, { timestamps: true }, {collection: 'specialite'});

module.exports = mongoose.model('Specialite', SpecialiteSchema);