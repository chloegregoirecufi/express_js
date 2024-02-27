const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');
//Middlewares pour vérifier que user est co
const {ensureAuthenticator} = require('../middlewares/authMiddleware');

//Route pour afficher le formulaire de création de post
router.get('/add', ensureAuthenticator, postController.showAddPost);

//route pour receptionner les données du formulaire de création de post
router.post('/add', ensureAuthenticator, postController.addPost);

module.exports = router;