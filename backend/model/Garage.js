const mongoose = require('mongoose');

const GarageSchema = new mongoose.Schema({
    localisation : {type : String, require: true},
    place : {type: Number, require: true}
}, { timestamps: true }, {collection: 'garage'}, {toJSON : { virtuals : true }});

GarageSchema.virtual('managers', {
    ref : "Employee",
    localField : "_id",
    foreignField : "idGarage"
})

module.exports = mongoose.model('Garage', GarageSchema);