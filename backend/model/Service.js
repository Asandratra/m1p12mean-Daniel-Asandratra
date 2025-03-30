const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    label : {type: String, require: true},
    duree : {
        type: Number,
        require: true,
        validate : {
            validator : function(value) {
                return value>=0
            },
            message: "La durée ne peut être inférieur à 0"
        }
    }
}, { timestamps: true }, {collection: 'service'});

module.exports = mongoose.model('Service', ServiceSchema);