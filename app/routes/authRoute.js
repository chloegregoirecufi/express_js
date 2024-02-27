const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const postController = require('../controller/postController');
const {ensureAuthenticator} = require('../middlewares/authMiddleware');


//Route d'accueil
router.get('/',ensureAuthenticator, postController.showHome);

//Page formulaire de connexion
router.get('/login', authController.showLoginForm);
//route qui receptionne les donnée du form de co
router.post('/login', authController.loginUser);

//Page formulaire de creation de compte
router.get('/register', authController.showRegistrationForm);
//route qui receptionne les données du formulaire d'inscritpion
router.post('/register', authController.registerUser);


module.exports = router;