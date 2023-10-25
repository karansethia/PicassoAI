const asyncWrapper = require("../middleware/async");
const User = require('../models/user')

const postSignin = asyncWrapper(async(req,res)=>{
    const newUser = await User.create(req.body);
    res.status(200).json({message: "User created",data: newUser}) 
})

module.exports = {postSignin}