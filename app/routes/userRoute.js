const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
//Middlewares pour vérifier que user est co
const {ensureAuthenticator} = require('../middlewares/authMiddleware');



//Rte qui renvoi le form de modif de post
router.get('/account/:id', ensureAuthenticator, userController.showEditUser);

//Rte pour receptionner les données du formulaire de modif de post
router.post('/account/:id', ensureAuthenticator, userController.editUser);

module.exports = router;