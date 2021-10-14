const express = require('express')
const User = require('../models/User')
const userCtrl = require('../controllers/user');
const { route } = require('./stuff');
const router = express.Router()

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;