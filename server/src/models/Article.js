const mongoose = require( 'mongoose');

var articleSchema = mongoose.Schema({
    title: {
        type:String
    },
    authorName: {
        type: String
    },
    datePublished: {
        type: String
    },
    articleBody: {
        type: String
    },
    imageUrl: {
        type: String
    },
    videoUrl: {
        type: String
    }
});

module.exports = mongoose.model('Article', articleSchema);