const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataWorkSchema = {
    title: String,
    companyName: String,
    dateFrom: String,
    dateTo: String,
    location: String,
    description: String,
    accomplishments: String,
    contactPersonName: String,
    contactPersonInfo: String
};

exports.dataWork = mongoose.model('DataWork', dataWorkSchema);;