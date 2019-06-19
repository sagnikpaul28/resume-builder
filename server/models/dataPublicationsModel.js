const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataPublicationsSchema = {
    type: String,
    title: String,
    authors: String,
    date: String,
    description: String
};

exports.dataPublications = mongoose.model('DataPublications', dataPublicationsSchema);;