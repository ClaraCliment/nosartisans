const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require('dotenv').config();

// Valider l'email (format)
const { isEmail } = require('validator')

// On importe le plugin pour gérer l'adresse email qui doit être unique (max 1 user par adresse email)
//const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  firstName: { 
    type: String, 
    required: [true, 'Veuillez préciser un prénom, svp.'], 
    maxLength: 32, 
    trimp: true },

  lastName: { 
    type: String, 
    required: [true, 'Veuillez préciser un nom de famille, svp.'],  
    maxLength: 35, 
    trimp: true },

  email: { 
    type: String, 
    required: [true, 'Veuillez préciser une adresse e-mail, svp.'],   
    unique: true, 
    validate: [isEmail] },

  password: { 
    type: String,
    trim: true,
    required : [true, 'Veuillez préciser un mot de passe, svp.'],
    minlength: [6, 'Votre mot de passe doit contenir au moins six(6) charactères'],
    match: [
        /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/,
        'Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un caractère spécial.'
    ]},

  admin: { type: Boolean, 
    required: true },
  
});

// On applique le plugin avant d'exporter le module
//userSchema.plugin(uniqueValidator);

// encrypting password before saving
userSchema.pre('save', async function(next){

  if(!this.isModified('password')){
      next()
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// verify password
userSchema.methods.comparePassword = async function(yourPassword){
   return await bcrypt.compare(yourPassword, this.password);
}

// get the token
userSchema.methods.jwtGenerateToken = function(){
   return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
       expiresIn: 3600
   });
}

module.exports = mongoose.model('User', userSchema);