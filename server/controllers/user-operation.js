const asyncWrapper = require("../middleware/async");

const getCommunityImages = asyncWrapper(async(req,res)=>{
  res.json({message: "Community images here"})
})

const postGenerateImage = asyncWrapper(async(req,res)=>{
  res.json({message: "image sent to openai"})
})

module.exports = {
  postGenerateImage,
  getCommunityImages
}