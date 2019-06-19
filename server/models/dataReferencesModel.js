const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataReferencesSchema = {
    name: String,
    position: String,
    email: String,
    number: String
};

exports.dataReferences = mongoose.model('DataReferences', dataReferencesSchema);;