const router = require('express').Router();
const studentController = require('../controllers/studentController');

router.route('/student/login').post(studentController.login);
router.route('/student/register').post(studentController.register);
router.route('/student/getInfo').post(studentController.getStudentInfo);
router.route('/student/apti').post(studentController.apti);
module.exports = router;