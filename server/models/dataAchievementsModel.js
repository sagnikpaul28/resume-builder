const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataAchievementsSchema = {
    name: String,
    link: String,
    description: String
};

exports.dataAchievements = mongoose.model('DataAchievements', dataAchievementsSchema);;