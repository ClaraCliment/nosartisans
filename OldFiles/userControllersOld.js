// Logique contrôle métier

require('dotenv').config();
const mytoken = (process.env.TOKEN);

// pour la sécurité mots de passe
const bcrypt = require('bcrypt');

const User = require('../models/User');

// créa de token 
const jwt = require('jsonwebtoken');

// Durée token
const temps = 60 * 60 * 1000;

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash,
          admin: req.body.admin
        });
        user.save()
          //.then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .then(() => res.status(200).json({  
            auth: true, 
            userId: user._id,
              token: jwt.sign(
                { userId: user._id },
                mytoken,
                { expiresIn: temps }
              )

          }))
          .catch(error => res.status(400).json({ error, auth: false, message: "Oups, soucis à la cration d'un nouvel utilisateur." }));
      })
      .catch(error => res.status(500).json({ error, auth: false, message: "Oups, soucis à la cration d'un nouvel utilisateur." }));
  };

  exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              auth: true, 
              userId: user._id,
              token: jwt.sign(
                { userId: user._id },
                // FAIT: à remplacer par une chaîne aléatoire beaucoup plus longue pour la production
                mytoken,
                // l'utilisateur devra donc se reconnecter au bout de 1h
                { expiresIn: temps }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

  exports.modifyUser = (req, res, next) => {
    User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'User modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };


  exports.deleteUser = (req, res, next) => {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'User supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.findUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
      .then(user => res.status(200).json(user))
      .catch(error => res.status(404).json({ error }));
  };

  // on fetch tout sauf les mots de passe des users
  exports.findAllUsers = (req, res, next) => {
    User.find().select('-password')
      .then(users => res.status(200).json(users))
      .catch(error => res.status(400).json({ error }));
  };