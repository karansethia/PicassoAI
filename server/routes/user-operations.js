const express = require('express');
const {postGenerateImage, getCommunityImages, postSaveImage, postShareImage} = require('../controllers/user-operation')

const router = express.Router();

router.get('/community', getCommunityImages);
router.post('/generate',postGenerateImage);
router.post('/:id/save',postSaveImage)
router.patch('/:id/share',postShareImage)


module.exports = router;