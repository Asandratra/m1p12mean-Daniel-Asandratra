const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    label : {type: String, require: true},
    duree : {type: Number, require: true}
}, { timestamps: true }, {collection: 'service'});

module.exports = mongoose.model('Service', ServiceSchema);