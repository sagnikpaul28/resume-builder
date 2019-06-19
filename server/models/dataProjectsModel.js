const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataProjectsSchema = {
    name: String
};

exports.dataProjects = mongoose.model('DataProjects', dataProjectsSchema);;