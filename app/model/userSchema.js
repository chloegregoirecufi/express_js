const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//création schéma
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    }

});

//méthode pour comparer les mdp
userSchema.methods.comparePassword = async function (candidatePassword){
try {
    const isMatch= await bcrypt.compare(candidatePassword, this.password);
    return isMatch;    
} catch (error) {
    throw error
}
}

module.exports = mongoose.model('User', userSchema);