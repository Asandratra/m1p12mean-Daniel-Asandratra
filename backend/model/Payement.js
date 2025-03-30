const mongoose = require('mongoose');

const PayementSchema = new mongoose.Schema({
    idTravail : {type: mongoose.Schema.ObjectId, ref: 'Travail', require: true},
    date : {type: Date, require: true},
    montant : {
        type: Number,
        require: true,
        validate : {
            validator : function(value) {
                return value>=0
            },
            message: "Le paiement ne peut être inférieur à 0"
        }
    }
}, { timestamps: true }, {collection: 'payement'});

module.exports = mongoose.model('Payement', PayementSchema);