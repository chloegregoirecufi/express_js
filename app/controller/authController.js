const passport = require('../passport-config');
const User = require('../model/userSchema');
const bcrypt = require('bcrypt');

//affiche le formulaire d'inscription
exports.showRegistrationForm = (req, res) => {
    res.render('register', {error:null})
}

//enregistrement d'un nouvel utilisateur
exports.registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body; 
        //Vérifier si user existe déjà
        const existngUser = await User.findOne({email:email});
        if(existngUser){
            return res.render('register', {error: 'Cet utilisateur existe déjà'})
        }
        //on vérifie que les champs soient bien remplis
        if(name === '' || email === '' || password === ''){
            return res.render('register', {error: 'Tous les champs sont obligatoires'});
        }

        //on encode le mot de passe 
        const hashedPassword = await bcrypt.hash(password, 10);

        //on créer l'objet utilisateur
        const newUser = new User({
            name:name,
            email:email,
            password:hashedPassword
        });

        //on sauvegarde l'user dans la bdd
        await newUser.save();

        res.redirect('/login');

    } catch (error) {
        console.error(error);
        res.render('register', {error: 'Erreur lors de l\'enregistrement de l\'utilisateur'});
    }
}

//afficher le formulaire de connexion
exports.showLoginForm = (req, res) => {
    res.render('login');
}

///connexion user
exports.loginUser = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
});

//déconnexion de user
exports.LogoutUser = (req, res) =>{
    req.logout();
    res.redirect('/login');
}

