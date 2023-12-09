const { cloudinary } = require("../db/cloudinary");
const asyncWrapper = require("../middleware/async");
const Image = require('../models/image');
const User = require("../models/user");
require('dotenv').config()
const OpenAI = require('openai');


const getUserImages = asyncWrapper(async(req,res) => {
  //todo get userid and get user details 
  const userImages = [];
  const {generatedImages} = await User.findById(req.params.id);
  const promises = generatedImages.map((imageId) => {
    return Image.findById(imageId)
    .then(image => {
      userImages.push(image);
    });
});
  Promise.all(promises)
  .then(() => {
    console.log(userImages);
    res.status(200).json({ images: userImages });
  })
});

const getUserInfo = asyncWrapper(async(req,res) => {
  const userDetails = await User.findById(req.params.id);
  res.json({id: userDetails._id, username: userDetails.username});
})

const getCommunityImages = asyncWrapper(async(req,res)=>{
  //get all the images that have visibility = public
  const imageRes = await Image.find({visibility: 'public'});
  console.log(imageRes);
  res.status(200).json({images: imageRes})
})

const postGenerateImage = asyncWrapper(async(req,res)=>{
  const openai = new OpenAI();
  console.log(req.body);
  const apiReq = (promptDetails) => {}
  const openAIRes = await openai.images.generate({
    prompt: req.body.prompt_details,
    n: req.body.num,
    size: req.body.size
  });
  if(!openAIRes){
    return res.status(500).json({"message":"Something went wrong please try again later"})
  }
  res.status(200).json({openAIResponse: openAIRes})
})

const postSaveImage =asyncWrapper(async(req,res)=>{
  //save the generated Image and prompt details in user profile and cloudinary

  //todo uploading image to cloudinary
    const cloudinaryRes = await cloudinary.uploader.upload(req.body.imageUrl,{upload_preset: 'picasso'});
  console.log(cloudinaryRes);
  const { asset_id, url: imageUrl } = cloudinaryRes;


  //todo upload image details to mongo images collections
  const imageRes = await Image.create({
    userId: req.params.id,
    imageUrl: imageUrl,
    prompt_details: req.body.prompt_details,
    cloudinary_id: asset_id
  });

console.log(imageRes);
  // //todo reflect the image id to user 
  // //todo query: db.users.updateOne({_id: ObjectId('6538b75879cfbf526deb5c57')},{$push:{generatedImages:{$each:['<ObjectId-of-image>]}}})
  await User.findByIdAndUpdate(req.params.id,{$push:{generatedImages:{$each:[imageRes._id]}}},{new: true});

  res.status(200).json({cloudinary_response: cloudinaryRes, mongo_response: imageRes, message: "Sucessfully saved"})
})


const postShareImage = asyncWrapper(async(req,res)=>{
  //save the generated Image in user profile and cloudinary
  console.log(req.body);
  const imageRes = await Image.findOneAndUpdate({userId:req.params.id},{$set:{visibility:req.body.imageVisibility}})
  res.status(200).json({message: "image shared", response: imageRes})
})


module.exports = {
  getCommunityImages,
  getUserInfo,
  getUserImages,
  postGenerateImage,
  postSaveImage,
  postShareImage
}