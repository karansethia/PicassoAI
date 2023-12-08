const asyncWrapper = require("../middleware/async");
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const postRegister = async(req,res)=>{
  const {name, username, password} = req.body;
  console.log(req.body);
  if(!username || !password || !name){
    return res.status(400).json({"message": "Username or password not found"}) //400 => bad req
  }
  //find if user exists
   try {
        const duplicate = await User.find({ username: username });

        if (duplicate.length !== 0) {
            return res.status(409).json({ "message": "Username already exists" });
        }

        const hashedPwd = await bcrypt.hash(password, 10); // Wait for the hashing to complete
        const newUser = {"name": name, "username": username, "password": hashedPwd };

        await User.create(newUser);

        // Send a 201 response with JSON
        res.status(201).json({ "message": "User created successfully" });
    } catch (error) {
        // Send a 500 response with JSON
        res.status(500).json({ "message": error.message });
    }
    
};

const postLogin = async(req,res) => {
  const { username, password } = req.body;
  console.log(req.body);
  if(!username || !password){
    return res.status(400).json({"message": "Username or password not found"}) //400 => bad req
  }
  // find existing user
  const foundUser = await User.findOne({username: username});
  console.log(foundUser);
  if(!foundUser){
    return res.status(401).json({"message": "User not found"}) //401 => unauthorized
  }
  const match = await bcrypt.compare(password,foundUser.password);
  if(match){
    //creating access and refresh token
    const accessToken = jwt.sign(
      {"username": foundUser.name},
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: '12h'}
    )
    const refreshToken = jwt.sign(
      {"username": foundUser.name},
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn: '1d'}
    );
    //saving refresh token in the database to the current user
    await User.findByIdAndUpdate(foundUser._id, { $set: { refreshToken: refreshToken } },
      { new: true })
    // sending refresh and access tokens
    res.cookie('jwt',refreshToken,{httpOnly: true})
    res.status(200).json({foundUser,accessToken});
    }else{
        res.status(401).json({"message": "Incorrect username or password"})
    }
}

module.exports = {postRegister, postLogin}