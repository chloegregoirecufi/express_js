const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    content: {
        type: String,
        required: true, 
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    update_at: {
        type: Date.now,
    }, 
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }


});

module.exports = mongoose.model('Post', postSchema);