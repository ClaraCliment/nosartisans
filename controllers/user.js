const User = require("../models/User");
const ErrorResponse = require('../utils/errorResponse');
require('dotenv').config();
const dayjs = require('dayjs');



//new Date(Date.now() + process.env.EXPIRE_TOKEN)

exports.signup = async (req, res, next)=>{

    const {email} = req.body;
    const userExist = await User.findOne({email});
    
    if (userExist){
      
     return  next(new ErrorResponse('E-mail already exists', 400))
    }

    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            user
        })
        
    } catch (error) {
        console.log(error);
        next(error);
        
    }
   
}



exports.signin = async (req, res, next)=>{

    try{
        const {email, password} = req.body;
        console.log(email, password);
        if(!email || !password){
       
            return  next(new ErrorResponse('E-mail and password are required', 400))
        }

        // check user e-mail
        const user = await User.findOne({email});
        if(!user){
           
            return  next(new ErrorResponse('Invalid credentials', 400))
        }

        // verify user password
        const isMatched = await user.comparePassword(password);
        if (!isMatched){
         
          return next(new ErrorResponse('Invalid credentials', 400))
        }
        generateToken(user, 200, res);

    }
    catch(error){
        console.log(error);
       
        next(new ErrorResponse('Cannot log in, check your credentials', 400))
    }
   
}


const generateToken = async (user, statusCode, res) =>{

    const token = await user.jwtGenerateToken();
    const firstName = await user.firstName;
    const admin = await user.admin;
    const lastName = await user.lastName;
    const email = await user.email;

    res
    .status(statusCode)
    .cookie("usertoken", token, {
        httpOnly: true,
        expires: dayjs().add(30, "days").toDate(),
      })
    .json({success: true, token, firstName, lastName, admin, email})
    .headers({ 'Content-Type': 'application/json', 'Accept': 'application/json, text/plain', token, firstName, lastName, email})

    res.send("Hello.");
}


//LOG OUT USER
exports.logout = (req, res, next)=>{
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "Logged out"
    })
}



// USER PROFILE 
exports.userProfile = async (req, res, next)=>{

    const user = await User.findById(req.user.id);
    res.status(200).json({
        sucess: true,
        user
    });
}


exports.singleUser = async (req, res, next)=>{

    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            sucess: true,
            user
        })
        
    } catch (error) {
        next(error)
        
    }
   
}

  // Modifier un user
  exports.modifyUser = (req, res, next) => {
    User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'User modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  // Supprimer un user
  exports.deleteUser = (req, res, next) => {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'User supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  // on fetch tout sauf les mots de passe des users
  exports.findAllUsers = (req, res, next) => {
    User.find().select('-password')
      .then(users => res.status(200).json(users))
      .catch(error => res.status(400).json({ error }));
  };