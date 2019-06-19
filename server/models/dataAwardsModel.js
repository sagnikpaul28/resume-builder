const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataAwardsSchema = {
    name: String,
    date: String,
    instituteName: String,
    description: String
};

exports.dataAwards = mongoose.model('DataAwards', dataAwardsSchema);;