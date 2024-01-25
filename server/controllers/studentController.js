const catchAsyncErrors = require('../middlewares/catchAsyncErrors.js');
const Student = require('../models/studentModel.js');
const sendCookie = require('../utils/sendCookie.js');

const register = catchAsyncErrors(async (req, res, next) => {
    var { email } = req.body;
    var student = await Student.findOne({ email });
    if (student) {
        return res.json({
            success: false,
            message: "Another student with same phone number already exists"
        });
    }
    student = await Student.create(req.body);
    sendCookie(student, 201, res);
});

const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student) {
        return res.json({
            success: false,
            message: "Student not found"
        });
    }
    if (password !== await student.password) {
        res.json({
            success: false,
            message: "Incorrect password"
        });
        return next(new Error("Incorrect password"));
    }
    res.status(200).json({
        success: true,
        student
    });
});

module.exports = {
    register,
    login
};