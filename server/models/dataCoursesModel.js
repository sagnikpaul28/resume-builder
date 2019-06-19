const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataCoursesSchema = {
    name: String,
    dateFrom: String, 
    dateTo: String,
    description: String
};

exports.dataCourses = mongoose.model('DataCourses', dataCoursesSchema);;