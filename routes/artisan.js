const express = require('express');
const app = require('../app');
const router = express.Router();


const artisanCtrl = require('../controllers/artisan');

//const auth = require('../middleware/auth');

// Trouver un artisan spécifique
router.get('/:id', artisanCtrl.findArtisan);

// Trouver tous les artisans
router.get('/', artisanCtrl.findAllArtisans);

// Trouver par secteur
router.get('/secteur/:secteur', artisanCtrl.findArtisansBySecteur);

// Trouver par mot clé
router.get('/mot/:mot', artisanCtrl.findArtisansByName);

// Trouver par mot clé
router.get('/nom/:nom', artisanCtrl.findArtisansByNom);

module.exports = router;