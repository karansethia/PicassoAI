const User = require('../models/user')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefreshToken = (req,res) => {
  const cookies = req.cookies;
  console.log(usersDB.users);
  if(!cookies?.jwt){
    console.log("cookie not found");
    return res.sendStatus(401);
  }
  console.log(cookies.jwt);
  const refreshToken = cookies.jwt;
  // const foundUser = usersDB.users.find(person => person.refreshToken == refreshToken);
  const foundUser = User.findOne({refreshToken: refreshToken})
  console.log(foundUser);
  if(!foundUser){
    return res.sendStatus(403) // 403 => forbidden
  }
  //evaluate jwt
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) =>{
        if(err || foundUser.username !== decoded.username){
          return res.sendStatus(403);
        }
        const accessToken = jwt.sign(
          {"username":decoded.username},
          process.env.ACCESS_TOKEN_SECRET,
          {expiresIn: '120s'}
          
          );
        res.json({accessToken})
      }
      )
    
}

module.exports = {handleRefreshToken}