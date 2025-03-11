const mongoose = require('mongoose');

const DiagnosticSchema = new mongoose.Schema({
    idTravail : {type: mongoose.Schema.ObjectId, ref: 'Travail', require: true},
    idService : {type: mongoose.Schema.ObjectId, ref: 'Service', require: true}
}, { timestamps: true }, {collection: 'diagnostic'});

module.exports = mongoose.model('Diagnostic', DiagnosticSchema);