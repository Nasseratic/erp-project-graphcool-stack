const express = require('express');
const article_controler = require('./controlers/article');
const middlewares = require("./middlewares");
const  mongoose = require('mongoose');

const port = process.env.PORT || 5000;


// Db connection
mongoose.Promise = global.Promise;
mongoose.connect( "mongodb://root:root123@ds046067.mlab.com:46067/dpiapi" ).then(() =>{
    console.log('Connected');
}).catch((err)=>{
    if(err) throw err;
    console.log('Connection error');
});

const app = express();

app.use( express.static('./uploads') );
app.use( '/' , middlewares.CROS);
app.use( '/' , middlewares.bodyParse);
app.use( '/' , middlewares.urlencodedParser);
app.use( '/' , middlewares.removePowered);

app.get('/', (req,res) => res.end("HI") );

app.get('/articles', article_controler.getAll );
app.get('/article/:id', article_controler.getOne );
app.post('/article', article_controler.addNew );


app.listen(port, () => console.log(`listening on http://localhost:${port}`));
