const express = require('express');
const {postGenerateImage, getCommunityImages, postSaveImage, postShareImage, getUserImages, getUserInfo} = require('../controllers/user-operation');
import { verifyJWT } from './middleware/verify';


const router = express.Router();

router.get('/community', getCommunityImages);
router.post('/:id/generate',verifyJWT,postGenerateImage);
router.post('/:id/save',verifyJWT,postSaveImage);
router.patch('/:id/share',verifyJWT,postShareImage);
router.get('/:id/user',getUserInfo);
router.get('/:id/generatedImages',getUserImages)


module.exports = router;