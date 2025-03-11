const mongoose = require('mongoose');

const PrixSchema = new mongoose.Schema({
    idService : {type: mongoose.Schema.ObjectId, ref: 'Service', require: true},
    date : {type: Date, require: true},
    montant : {type: Number, require: true}
}, { timestamps: true }, {collection: 'service'});

module.exports = mongoose.model('Prix', PrixSchema);