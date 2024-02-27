const User = require('../model/userSchema');
const bcrypt = require('bcrypt');

//affiche le formulaire d'inscription
exports.showRegistrationForm = (req, res) => {
    res.render('register', {error:null})
}