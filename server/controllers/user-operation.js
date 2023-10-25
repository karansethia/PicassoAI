const asyncWrapper = require("../middleware/async");

const getCommunityImages = asyncWrapper(async(req,res)=>{
  //get all the images that have visibility = public
  res.json({message: "Community images here"})
})

const postGenerateImage = asyncWrapper(async(req,res)=>{
  // sent axios req to openAI, get images
  res.json({message: "image sent to openai"})
})

const postSaveImage = asyncWrapper(async(req,res)=>{
  //save the generated Image and prompt details in user profile and cloudinary
  res.json({message: "Image saved"})
})
const postShareImage = asyncWrapper(async(req,res)=>{
  //save the generated Image in user profile and cloudinary
  res.json({message: "image shared"})
})


module.exports = {
  postGenerateImage,
  getCommunityImages,
  postSaveImage,
  postShareImage
}