const express = require('express');
const router = express.Router();
//TODO: Créer ensureAuthenticator dans Middlewares
const {ensureAuthenticator} = require('../middlewares/authMiddleware');

//Page d'accueil 
router.get('/', ensureAuthenticator, (req, res)=> {
    res.render('accueil');
})

//TODO: les autres routes à prévoir

module.exports = router;