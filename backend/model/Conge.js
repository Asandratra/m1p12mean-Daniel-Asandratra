const mongoose = require('mongoose');

const CongeSchema = new mongoose.Schema({
    idEmployee : {type: mongoose.Schema.ObjectId, require: true, ref: 'Employee'},
    debut : {type: Date, require: true},
    fin : {
        type: Date,
        require: true,
        validate: {
            validator: function (value) {
                return value>=this.debut;
            },
            message: "Date de fin de congé ne peut être avant la date de début!"
        }
    }
}, { timestamps: true }, {collection: 'conge'});

module.exports = mongoose.model('Conge', CongeSchema);