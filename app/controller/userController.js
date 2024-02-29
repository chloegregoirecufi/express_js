const User = require('../model/userSchema')

//methode pour afficher les données de mon compte
exports.showAccount = async (req, res) => {
    try {
        //on récup l'id de user co 
        const userId = req.user._id;

        //on récup tous les info de user
        const userInfos = await User.findById(userId);

        //on renvoi la vue accueil avec les info de user co
        res.render('/account', {userInfos});
        console.log(userInfos);

    } catch (error) {
        console.log(error);

    }
}

exports.showEditUser = async (req, res) => {
}



exports.editUser = async (req, res) => {
}
