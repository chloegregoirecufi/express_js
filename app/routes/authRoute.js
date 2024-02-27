const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

//Page formulaire de connexion
router.get('/login', (req, res)=> {
    res.render('login');
})

//Page formulaire de creation de compte
router.get('/register', authController.showRegistrationForm);
//route qui receptionne les données du formulaire d'inscritpion
router.post('/register', authController.registerUser);


module.exports = router;