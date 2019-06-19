const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataTechnicalSkillsSchema = {
    name: String
};

exports.dataTechnicalSkills = mongoose.model('DataTechnicalSkills', dataTechnicalSkillsSchema);;