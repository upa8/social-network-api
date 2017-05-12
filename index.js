const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config.dev.js');
const db = mongoose.connect(config.mongoUrl);

//TODO: Move this to separate file
mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('MongoDB connection error. Please make sure MongoDB is running.');
    process.exit();
});


// TODO: Separate out this middleware
// middleware for parameters
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// TOD0: remove this and give cors to the
// api's that need cors
app.use(cors()); // avoid cors issue


app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
    console.log('Server is running');
});

// Get everything you require for the app
// import modules that you want to run
let modules = require('./modules/modules');

let allModules = new modules(app);

module.exports = app;
