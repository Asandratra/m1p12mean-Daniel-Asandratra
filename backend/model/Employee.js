const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const EmployeeSchema = new mongoose.Schema({
    username : {type: String, require: true, unique: true},
    motdepasse : {type: String, require: true},
    nom : {type: String, require: true},
    prenom : {type: String, require: true},
    tel : {type: String, require: true},
    idRole : {type : mongoose.Schema.ObjectId, require: true, ref : 'Role'},
    idGarage: {type: mongoose.Schema.ObjectId, require: true, ref : 'Garage'},
    estActif : {type: Boolean, default : true}
}, { timestamps: true }, {collection: 'employee'}, {toJSON : { virtuals : true }});

EmployeeSchema.virtual('conges',{
    ref:'Conge',
    localField:'_id',
    foreignField:'idEmployee'
})

EmployeeSchema.virtual('salaire',{
    ref:'Salaire',
    localField:'_id',
    foreignField:'idEmployee'
})

EmployeeSchema.virtual('specialities',{
    ref:'Specialite',
    localField:'_id',
    foreignField:'idEmployee'
})

//Cryptage de mot de passe lors de nouveau Employee
EmployeeSchema.pre('save', function(next) {
    var employee = this;
    if(!employee.isModified('motdepasse')) return next();
    
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) return next(err);

        bcrypt.hash(employee.motdepasse, salt, function(err, hash) {
            if(err) return next(err);

            employee.motdepasse = hash;
            next();
        });
    });
});

EmployeeSchema.methods.checkMotDePasse = function (mdpCandidat, cb){
    bcrypt.compare(mdpCandidat, this.motdepasse, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    });
}

module.exports = mongoose.model('Employee', EmployeeSchema);