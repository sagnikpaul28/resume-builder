const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSkillsSchema = {
    name: String
};

exports.dataSkills = mongoose.model('DataSkills', dataSkillsSchema);;