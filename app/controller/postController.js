const Post = require('../model/postSchema')


//page accueil
exports.showHome = async (req, res) => {
    try {
        //on récup l'id de user co 
        const userId = req.user._id;

        //on récup tous les postes de user
        const userPosts = await Post.find({author:userId}).sort({created_at: 'desc'});

        //on renvoi la vue accueil avec les posts de user co
        res.render('accueil', {userPosts});

    } catch (error) {
        console.log(error);
    }
};

//methode pour afficher form
exports.showAddPost = (req,res) => {
    res.render('post/add', {error: null});
};

//methode pour ajouter un post
exports.addPost = async(req, res) => {
    try {
        const {title, content} = req.body;
        //on recupere l'id de user co
        const author = req.user._id;

        //on creer l'objet post
        const newPost = new Post({
            title:title,
            content:content,
            author:author,
            created_at: new Date(),
        });

        //on save le post
        await newPost.save();

        //on redirige user vers accueil
        res.redirect('/');

    } catch (error) {
        //on redirige sur le formulaire de création de post avec un msg d'erreur
        res.render('post/add', {error:'Une erreur est survenue, veuillez réessayer'})
    }
};