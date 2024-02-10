const express = require('express');
const {postRegister, postLogin, postLogout}  = require('../controllers/auth');
const { handleRefreshToken } = require('../controllers/refresh-token')

const router = express.Router();

router.post('/register',postRegister);
router.post('/login',postLogin);
router.get('/refresh', handleRefreshToken);
router.post('/logout', postLogout);

module.exports = router