const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");


//Import Schemas
const dataModel = require('./models/model');

console.log(dataModel);

//Setup app
const app = express();
const router = express.Router();
const server = app.listen(4000, function () {
    console.log('Listening to port 4000');
});
