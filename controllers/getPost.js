const Post = require ('../database/models/Post')

module.exports = async(req, res) => {
    
    const post = await Post.findById(req.params.id).populate('author');

    res.render('post', {

       post

    });

}