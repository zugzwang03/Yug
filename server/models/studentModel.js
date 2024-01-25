const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    email: {
        type: String,
        validate: [validator.isEmail, 'Please enter a valid email id'],
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    rollNo: {
        type: Number,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    fathersName: {
        type: String,
        required: true
    },
    mothersName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    parentPhoneNumber: {
        type: Number,
        required: true
    }
});

studentSchema.methods.getJWTToken = () => {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
}

studentSchema.methods.getResetPasswordToken = () => {
    const resetToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
}

const student = mongoose.model('Student', studentSchema);
module.exports = student;