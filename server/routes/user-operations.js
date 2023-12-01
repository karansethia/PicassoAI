const express = require('express');
const {postGenerateImage, getCommunityImages, postSaveImage, postShareImage, getUserImages, getUserInfo} = require('../controllers/user-operation');
const verifyJWT = require('../middleware/verify');

const router = express.Router();

router.get('/community', getCommunityImages);
router.post('/:id/generate',verifyJWT,postGenerateImage);
router.post('/:id/save',verifyJWT,postSaveImage);
router.patch('/:id/share',verifyJWT,postShareImage);
router.get('/:id/user',verifyJWT,getUserInfo);
router.get('/:id/generatedImages',verifyJWT,getUserImages)


module.exports = router;