const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataBasicsSchema = {
    email: String,
    number: String,
    country: String,
    city: String,
    address: String,
    website: String,
};

exports.dataBasicsSchema = mongoose.model('DataBasics', dataBasicsSchema);;