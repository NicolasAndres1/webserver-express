const express = require('express');
const app = express();
const hbs = require('hbs');
require('./public/helpers/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs'); // Express HBS engine



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Nicolas'
    });
});

app.get('/about', (req, res) => {
    res.render('about')
    
});

app.listen(port);