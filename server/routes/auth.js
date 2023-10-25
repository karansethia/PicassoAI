const express = require('express');
const {postSignin}  = require('../controllers/auth')

const router = express.Router();

router.post('/login',postSignin)

module.exports = router