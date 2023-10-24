const express = require('express');
const {postGenerateImage, getCommunityImages} = require('../controllers/user-operation')

const router = express.Router();

router.get('/community', getCommunityImages);
router.post('/generate',postGenerateImage);
router.post('/:id/save',()=>{})
router.post('/:id/share',()=>{})


module.exports = router;