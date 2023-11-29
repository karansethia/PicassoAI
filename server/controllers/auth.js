const asyncWrapper = require("../middleware/async");
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const postRegister = asyncWrapper(async(req,res)=>{
    const {username, password} = req.body;
    if(!username || !password){
    return res.sendStatus(400).json({"message": "Username or password not found"}) //400 => bad req
  }
  //find if user exists
  try {
    const hashedPwd = bcrypt.hash(password, 10);
    const newUser = { "username": username, "password": hashedPwd };
    await User.create(newUser);
    res.status(201).json({"message": "created"})
  } catch (error) {
    res.status(500).json({"message": error.message})
  }
    const newUser = 
    res.status(200).json({message: "User created",data: newUser}) 
});

const postLogin = async(req,res) => {
  const { username, password } = req.body;
  if(!username || !password){
    return res.status(400).json({"message": "Username or password not found"}) //400 => bad req
  }
  // find existing user
  const foundUser = true;
  if(!foundUser){
    return res.status(401).json({"message": "User not found"}) //401 => unauthorized
  }
  const match = await bcrypt.compare(password,foundUser.password);
  if(match){

    //creating access and resfresh token
    const accessToken = jwt.sign(
      {"username": foundUser.name},
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: '120s'}
    )
    const refreshToken = jwt.sign(
      {"username": foundUser.name},
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn: '1000s'}
    );
    //saving refresh token in the database to the current user
    // sending refresh and access tokens
    res.cookie('jwt',refreshToken,{httpOnly: true})
    res.sendStatus(200).json({accessToken});
    }else{
        res.sendStatus(401).json({"message": "Incorrect username or password"})
    }
}

module.exports = {postRegister, postLogin}