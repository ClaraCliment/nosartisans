const mongoose = require('mongoose');

const artisanSchema = mongoose.Schema({
  NumeroEntreprise: { type: Number, required: true },
  TypeEntreprise: { type: String, required: false },
  Langue: { type: String, required: true, unique: false },
  FormeJuridique: { type: String, required: false },
  Nom: { type: String, required: true },
  Adresse: { type: String, required: false },
  Numero: { type: String, required: false },
  Localite: { type: String, required: false },
  Telephone: { type: String, required: false },
  Email: { type: String, required: false },
  Web: { type: String, required: false },
  DateDebut: { type: String, required: false },
  DateFin: { type: String, required: false },
  Secteur: { type: String, required: true },
  lienBCE: { type: String, required: false },
});

module.exports = mongoose.model('Artisan', artisanSchema);