const express = require('express');
const {postGenerateImage, getCommunityImages, postSaveImage, postShareImage, getUserImages, getUserInfo} = require('../controllers/user-operation')

const router = express.Router();

router.get('/community', getCommunityImages);
router.post('/generate',postGenerateImage);
router.post('/:id/save',postSaveImage);
router.patch('/:id/share',postShareImage);
router.get('/:id/dashboard',getUserInfo);
router.get('/:id/generatedImages',getUserImages)


module.exports = router;