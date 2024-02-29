const Post = require('../model/postSchema')


//page accueil
exports.showHome = async (req, res) => {
    try {
        //on récup l'id de user co 
        const userId = req.user._id;

        //on récup tous les posts de user
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

//methode pour afficher le form de modif de post
exports.showEditPost = async (req, res) => {
    try {
       //on récupère l'id du post 
       const postId = req.params.id;

       //on récupère les données du post grâce à son id
       const post = await Post.findById(postId);

       //on verif si l'utilisateur est l'auteur du post
       if(post.author.equals(req.user._id)){
        //on renvoi la vue des modif des posts avec les données du post
        res.render('post/edit', { post });
        } else{
            res.redirect('/'); 
       }
    } catch (error) {
        res.render('post/edit', {error:'Une erreur est survenue, veuillez réessayer.'})
    }
};

//méthode qui maj un post
exports.editPost = async (req,res) =>{
    try {
        //on récup les données du form
        const {title, content} = req.body;
        //on récup l'id du post
        const postId = req.params.id;
        //on recup le post grace à son id
        const post = await Post.findById(postId);

        //on verif si l'utilisateur est l'auteur du post
        if(post.author.equals(req.user._id)){
            //on maj le post
            post.title = title;
            post.content = content;
            post.updated_at= new Date();

            //on save le post
            await post.save();
    
            //on redirige sur l'accueil
            res.redirect('/');
        }else{
            res.redirect('/');
        }

    } catch (error) {
        //on retrun form avec msg error
        res.render('post/edit', {error: "Une erreur est survenue, veuillez réessayer"});
    }
}

//méthode qui supp le post
exports.deletePost = async (req, res) => {
    try {
        //on recup l'id du post
      const postId = req.params.id;
      
      //on récupère le post grace à son id
      const post = await Post.findById(postId);
      console.log(post);

      //Si l'id du post existe pas
      if(!post){
        return res.status(404).send('Arrete de jouer avec les urls');
      }

      //on verif si l'user est l'auteur du post
      if(post.author.equals(req.user._id)){
        //on supp le post
        await post.deleteOne();

        //on redirige vers l'accueil
        res.redirect('/');
      }else{
        //on redirige sur l'accueil
        res.redirect('/');
      }
      
    } catch (error) {
        
    }
}

