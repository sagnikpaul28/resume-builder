const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userDetails = require('./userModel');
const data = require('./dataModel');
const config = require('./configModel');

const modelSchema = {
    ...userDetails.userDetails,
    ...data.data,
    ...config.configSchema
};

const model = mongoose.model('details', modelSchema);
module.exports = model;