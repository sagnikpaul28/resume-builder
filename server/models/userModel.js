const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = {
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}

exports.userDetails =  UserSchema;