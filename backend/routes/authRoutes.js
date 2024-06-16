const express = require('express');
const router = express.Router();
const AuthController = require('../controller/authController');
const validator = require('express-joi-validation').createValidator({});
const {registerSchema, loginSchema} = require('../model/authModel');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register',validator.body(registerSchema), AuthController.controller.postRegister);

router.post('/login',validator.body(loginSchema), AuthController.controller.postLogin);

router.post('/test',authMiddleware, (req, res) => {
    res.send('pass')
});

module.exports = router;