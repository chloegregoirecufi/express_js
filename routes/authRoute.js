const express = require('express');
const router = express.Router();

//Page formulaire de connexion
router.get('/login', (req, res)=> {
    res.render('login');
})

//Page formulaire de creation de compte
router.get('/register', (req, res)=> {
    res.render('register');
})

module.exports = rputer;