const Article = require("../models/Article");

module.exports = {
    getAll: (req,res) =>{
        Article.find({}).then( articles  =>{
            res.json(articles);
        }).catch(() => res.send(null));
    },
    getOne: (req,res) =>{
        console.log(req.params.id);
        
        Article.findOne({_id:req.params.id}).then( article  =>{
            res.json(article);
        }).catch(() => res.send(null));
    },
    addNew: (req,res) => {
        let a = new Article(req.body);
        a.save()
        .then(()=> { res.send({"msg":"Added"})})
        .catch(err=> { res.end(err) });
    }
}