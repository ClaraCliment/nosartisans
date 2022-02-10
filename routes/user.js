const express = require('express');
const router = express.Router(); 
const {signup, signin, logout, singleUser, userProfile, modifyUser, deleteUser, findAllUsers } = require("../controllers/user");
const {isAuthenticated} = require("../middleware/auth");


router.post('/signup', signup );
router.post('/signin', signin );
router.get('/logout', logout );
router.get('/getme', isAuthenticated, userProfile );
router.get('/:id', singleUser );
router.put('/:id', isAuthenticated, modifyUser );
router.delete('/:id', isAuthenticated, deleteUser );
router.get('/', findAllUsers );



module.exports = router;