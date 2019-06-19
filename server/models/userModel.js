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

const Users = mongoose.model('users', UserSchema);
export default Users;