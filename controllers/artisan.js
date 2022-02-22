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
      .then(artisans => res.status(200).json(artisans.slice(0, 100)))
      .catch(error => res.status(400).json({ error }));
  };

// Find by category?
exports.findArtisansBySecteur = (req, res, next) => {
  Artisan.find({ Secteur: req.params.secteur })
    .then(artisans => res.status(200).json(artisans.slice(0, 100)))
    .catch(error => res.status(404).json({ error }));
};

// Find by category?
exports.findArtisansByName = async (req, res, next) => {
  let mot= req.params.mot.trim();
  console.log(mot);
  let search = await Artisan.find({$or:[{Nom: {$regex: new RegExp('.*'+mot+'.*', 'i')}}, {Localite: {$regex: new RegExp('.*'+mot+'.*', 'i')}}]}).exec();
  // limit the number of artisans we display
  search = search.slice(0, 100);
  res.send(search)
    // 
};

// Find by category?
exports.findArtisansByNom = async (req, res, next) => {
  let nom= req.params.nom.trim();
  let search = await Artisan.find({Nom: {$regex: new RegExp('.*'+nom+'.*', 'i')}}).exec();
  // limit the number of artisans we display
  search = search.slice(0, 25);
  res.send({payload:search})
    // 
};