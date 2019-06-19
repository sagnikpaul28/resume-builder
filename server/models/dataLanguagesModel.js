const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataLanguagesSchema = {
    name: String
};

exports.dataLanguages = mongoose.model('DataLanguages', dataLanguagesSchema);;