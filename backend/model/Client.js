const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    username : {type: String, require: true, unique: true},
    motdepasse : {type: String, require: true},
    nom : {type: String, require: true},
    prenom : {type: String, require: true},
    tel : {type: String, require: true}
}, { timestamps: true }, {collection: 'client'});

module.exports = mongoose.model('Client', ClientSchema);