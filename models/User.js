const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    ph: { type: Number},
    dob: { type: String},
    code: {type: String},
    isAdmin: {
        type: Boolean,
        default: false,
             },
   },
    { timestamps: true }
);


module.exports = mongoose.model('User', UserSchema)