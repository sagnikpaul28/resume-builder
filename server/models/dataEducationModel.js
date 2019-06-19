const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataEducationSchema = {
    program: String,
    institute: String,
    dateFrom: String,
    dateTo: String,
    place: String,
    course: String
};

exports.dataEducation = mongoose.model('DataEducation', dataEducationSchema);;