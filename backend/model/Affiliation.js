const mongoose = require('mongoose');

const AffiliationSchema = new mongoose.Schema({
    idTravail : {type: mongoose.Schema.ObjectId, ref: 'Travail', require: true},
    idEmployee : {type: mongoose.Schema.ObjectId, ref: 'Employee', require: true}
}, { timestamps: true }, {collection: 'affiliation'});

module.exports = mongoose.model('Affiliation', AffiliationSchema);