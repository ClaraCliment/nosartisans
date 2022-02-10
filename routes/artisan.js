const express = require('express');
const app = require('../app');
const router = express.Router();


const artisanCtrl = require('../controllers/artisan');

//const auth = require('../middleware/auth');

// Trouver un artisan spécifique
router.get('/:id', artisanCtrl.findArtisan);

// Trouver tous les artisans
router.get('/', artisanCtrl.findAllArtisans);

module.exports = router;