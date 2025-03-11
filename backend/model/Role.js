const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    label : { type: String, require: true}
}, {timestamps: true }, {collection: 'role'});

module.exports = mongoose.model('Role', RoleSchema);