const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataVolunteerSchema = {
    title: Stirng,
    companyName: String,
    dateFrom: String,
    dateTo: String,
    location: String,
    description: String
};

exports.dataVolunteer = mongoose.model('DataVolunteer', dataVolunteerSchema);;