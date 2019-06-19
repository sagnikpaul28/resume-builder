const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataInterestsSchema = {
    name: String
};

exports.dataInterests = mongoose.model('DataInterests', dataInterestsSchema);;