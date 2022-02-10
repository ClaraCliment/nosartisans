// Logique contrôle métier

const Artisan = require('../models/Artisan');

// FIND one atisan by ID
  exports.findArtisan = (req, res, next) => {
    Artisan.findOne({ _id: req.params.id })
      .then(artisan => res.status(200).json(artisan))
      .catch(error => res.status(404).json({ error }));
  };

  // FIND all artisans
  exports.findAllArtisans = (req, res, next) => {
    Artisan.find()
      .then(artisans => res.status(200).json(artisans))
      .catch(error => res.status(400).json({ error }));
  };

// Find by category?