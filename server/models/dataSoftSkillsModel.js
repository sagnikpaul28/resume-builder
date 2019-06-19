const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSoftSkillsSchema = {
    name: String
};

exports.dataSoftSkills = mongoose.model('DataSoftSkills', dataSoftSkillsSchema);;