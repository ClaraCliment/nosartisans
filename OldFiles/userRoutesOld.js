const express = require('express');
const app = require('../app');
const router = express.Router();


const userCtrl = require('../controllers/user');

const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);


// Modifier les données d'un user
router.put('/:id', auth, userCtrl.modifyUser);

// Supprimer un user
router.delete('/:id', auth, userCtrl.deleteUser);

// Trouver un user spécifique
router.get('/:id', userCtrl.findUser);

// Trouver tous les users
router.get('/', userCtrl.findAllUsers);

module.exports = router;