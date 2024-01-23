const express = require('express');
const {postRegister, postLogin, getLogout}  = require('../controllers/auth');
const { handleRefreshToken } = require('../controllers/refresh-token')

const router = express.Router();

router.post('/register',postRegister);
router.post('/login',postLogin);
router.get('/refresh', handleRefreshToken);
router.get('/logout', getLogout);

module.exports = router