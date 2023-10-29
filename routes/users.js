const express = require('express');
const router = express.Router();
const { signUp,login } = require('../controllers/users')      // signup function from user controller


router.route('/users/signup').post(signUp);
router.route('/users/login').post(login)

module.exports = router;