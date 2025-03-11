const mongoose = require('mongoose');

const GarageSchema = new mongoose.Schema({
    localisation : {type : String, require: true},
    place : {type: Number, require: true}
}, { timestamps: true }, {collection: 'garage'});

module.exports = mongoose.model('Garage', GarageSchema);