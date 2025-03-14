const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const ClientSchema = new mongoose.Schema({
    username : {type: String, require: true, unique: true},
    motdepasse : {type: String, require: true},
    nom : {type: String, require: true},
    prenom : {type: String, require: true},
    tel : {type: String, require: true, unique: true}
}, { timestamps: true }, {collection: 'client'});

//Cryptage de mot de passe lors de nouveau client
ClientSchema.pre('save', function(next) {
    var client = this;
    if(!client.isModified('motdepasse')) return next();
    
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) return next(err);

        bcrypt.hash(client.motdepasse, salt, function(err, hash) {
            if(err) return next(err);

            client.motdepasse = hash;
            next();
        });
    });
});

ClientSchema.methods.checkMotDePasse = function (mdpCandidat, cb){
    bcrypt.compare(mdpCandidat, this.motdepasse, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    });
}

module.exports = mongoose.model('Client', ClientSchema);