const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataConferencesSchema = {
    name: String,
    dateFrom: String, 
    dateTo: String,
    description: String
};

exports.dataConferences = mongoose.model('DataConferences', dataConferencesSchema);;