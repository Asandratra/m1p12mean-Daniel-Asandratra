const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
if (process.env.NODE_ENV == 'production') {
    require('dotenv').config({path : './.env.default'});
}
else{
    require('dotenv').config();
}

const app = express();
exports.app = app;
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Connexion a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("m1p12mean-Daniel-Asandratra-Backend is live")
})

//Routes
app.use('/roles', require('./routes/roleRoutes'));
app.use('/employees', require('./routes/employeeRoutes'));
app.use('/salaires', require('./routes/salaireRoutes'));
app.use('/specialites', require('./routes/specialiteRoutes'));
app.use('/conges', require('./routes/congeRoutes'));
app.use('/garages', require('./routes/garageRoutes'));
app.use('/demandesrdv', require('./routes/demanderdvRoutes'));
app.use('/rendezvous', require('./routes/rendezVousRoutes'));
app.use('/clients', require('./routes/clientRoutes'));
app.use('/travaux', require('./routes/travailRoutes'));
app.use('/affiliation', require('./routes/affiliationRoutes'));
app.use('/payements', require('./routes/payementRoutes'));
app.use('/diagnostics', require('./routes/diagnosticRoutes'));
app.use('/services', require('./routes/serviceRoutes'));
app.use('/prix', require('./routes/prixRoutes'));

app.listen(PORT, () => console.log(`Server started on the port ${PORT}`));