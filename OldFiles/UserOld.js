const mongoose = require('mongoose');

// Valider l'email (format)
const { isEmail } = require('validator')

// On importe le plugin pour gérer l'adresse email qui doit être unique (max 1 user par adresse email)
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  firstName: { 
    type: String, 
    required: true, 
    maxLength: 35, 
    trimp: true },
  lastName: { 
    type: String, 
    required: true, 
    maxLength: 35, 
    trimp: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    validate: [isEmail] },
  password: { type: String, 
    required: true, 
    owercase: true, 
    trimp: true, minLength: 8 },
  admin: { type: Boolean, 
    required: true },
});

// On applique le plugin avant d'exporter le module
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);