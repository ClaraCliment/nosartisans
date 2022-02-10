const express = require('express');
const app = require('../app');
const router = express.Router();

const articleCtrl = require('../controllers/article');

const auth = require('../middleware/auth');

// Créer article
router.post('/', articleCtrl.createArticle);

// Modifier article
router.put('/:id', articleCtrl.modifyArticle);

// Supprimer article
router.delete('/:id', articleCtrl.deleteArticle);

// Trouver article
router.get('/:id', articleCtrl.findArticle);

// Trouver tous les articles
router.get('/', articleCtrl.findAllArticles);

module.exports = router;