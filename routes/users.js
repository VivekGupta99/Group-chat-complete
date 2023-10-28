const express = require('express');
const router = express.Router();
const { signUp } = require('../controllers/users')      // signup function from user controller


router.route('/users/signup').post(signUp);

module.exports = router;