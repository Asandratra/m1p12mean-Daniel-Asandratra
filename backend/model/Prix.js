const mongoose = require('mongoose');

const PrixSchema = new mongoose.Schema({
    idService : {type: mongoose.Schema.ObjectId, ref: 'Service', require: true},
    date : {type: Date, require: true},
    montant : {
        type: Number,
        require: true,
        validate : {
            validator : function(value) {
                return value>=0
            },
            message: "Le prix de service ne peut être inférieur à 0"
        }
    }
}, { timestamps: true }, {collection: 'service'});

module.exports = mongoose.model('Prix', PrixSchema);