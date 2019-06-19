const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataCertificatesSchema = {
    name: String,
    link: String,
    date: String,
    description: String
};

exports.dataCertificates = mongoose.model('DataCertificates', dataCertificatesSchema);;