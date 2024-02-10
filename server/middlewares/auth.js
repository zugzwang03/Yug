const Student = require("../models/studentModel.js");
const catchAsyncErrors = require("./catchAsyncErrors.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if (!token) {
        return next(new Error("Please Login to access this resource", 401));
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    if (req.query.role == 'student')
        req.user = await Student.findById(decodedData.id);
    next();
});

module.exports = isAuthenticated;