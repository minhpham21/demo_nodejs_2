// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// let UserSchema = new Schema({
//     name: {type: String, required: true, max: 100},
//     email: {type: String, required: true, unique: true, match: /.+\@.+\..+/,},
//     pass: {type: Number, required: true},
//     role: {type: Number, required: true}
// });

// // Export the model
// module.exports = mongoose.model('user', UserSchema, 'Users');


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    email: {
        type: String, 
        required: true, 
        unique: true, 
        match: /.+\@.+\..+/
    },
    pass: {
        type: Number, 
        required: true
    },
    role: {
        type: Number, 
        required: true
    }
});

module.exports =mongoose.model('users', UserSchema)