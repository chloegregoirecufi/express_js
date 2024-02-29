const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');
//Middlewares pour vérifier que user est co
const {ensureAuthenticator} = require('../middlewares/authMiddleware');

//Route pour afficher le formulaire de création de post
router.get('/add', ensureAuthenticator, postController.showAddPost);

//route pour receptionner les données du formulaire de création de post
router.post('/add', ensureAuthenticator, postController.addPost);

//Rte qui renvoi le form de modif de post
router.get('/edit/:id', ensureAuthenticator, postController.showEditPost);

//Rte pour receptionner les données du formulaire de modif de post
router.post('/edit/:id', ensureAuthenticator, postController.editPost);

//route pour supp le post
router.get('/delete/:id', ensureAuthenticator, postController.deletePost);


module.exports = router;