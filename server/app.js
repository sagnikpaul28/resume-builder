const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");


//Import Schemas
const UserDetails = require('./models/model');


//Setup mongoose
mongoose.connect('mongodb://sagnikpaul:sagnikpaul28@ds341557.mlab.com:41557/resume-builder');
mongoose.Promise = global.Promise;


//Setup app
const app = express();
const router = express.Router();
const server = app.listen(4000, function () {
    console.log('Listening to port 4000');
});


//Enable cors
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//Setup bodyParser
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));


//Setup routes 
router.post('/create-new-user', function(req, res, next) {
    UserDetails.findOne({
        email: req.body.email
    }).then(function(result) {
        if (result) {
            res.status(400).send('User already exists');
        }else {
            UserDetails.create({
                email: req.body.email,
                password: req.body.password
            });
            res.send('created');
        }
    });
});

router.get('/fetch-user', function(req, res, next) {
    UserDetails.findOne({
        email: req.body.email
    }).then(function(result) {
        if (result) {
            res.send(result);
        }else {
            res.status(404).send('User doesn\'t exist');
        }
    })
});

router.post('/login', function(req, res, next) {
    UserDetails.findOne({
        email: req.body.email
    }).then(function(result) {
        if (result) {
            if (result.password === req.body.password) {
                res.send('ok');
            }else { 
                res.status(401).send('Incorrect Password');
            }
        }else {
            res.status(404).send('Invalid username');
        }
    })
});

app.use('/', router);


//Error Handling
app.use(function (err, req, res, next) {
    console.log(err);
});
