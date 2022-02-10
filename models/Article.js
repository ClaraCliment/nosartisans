const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  titre: { type: String, required: true, trimp: true },
  sousTitre: { type: String, required: true, trimp: true },
  paragraphe1: { type: String, required: true, trimp: true },
  paragraphe2: { type: String, required: false, trimp: true },
  paragraphe3: { type: String, required: false, trimp: true },
  paragraphe4: { type: String, required: false, trimp: true },
  paragraphe5: { type: String, required: false, trimp: true },
  paragraphe6: { type: String, required: false, trimp: true },
  citation: { type: String, required: false, trimp: true },
  accroche: { type: String, required: false, trimp: true },
  signature: { type: String, required: true, trimp: true },
},
{timestamps: true});


module.exports = mongoose.model('Article', articleSchema);