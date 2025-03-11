const mongoose = require('mongoose');

const CongeSchema = new mongoose.Schema({
    idEmployee : {type: mongoose.Schema.ObjectId, require: true, ref: 'Employee'},
    debut : {type: Date, require: true},
    fin : {type: Date, require: true}
}, { timestamps: true }, {collection: 'conge'});

module.exports = mongoose.model('Conge', CongeSchema);