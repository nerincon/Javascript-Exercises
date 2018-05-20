var express = require('express');
    nunjucks = require('nunjucks');
    body_parser = require('body-parser');
    pgp = require('pg-promise')({ });
    db = pgp({database: 'restaurant_v2', user: 'postgres'});
    app = express();



app.use(express.static(__dirname + "/public"));
app.set('view engine', 'html');
app.use(body_parser.urlencoded({extended: false}));


nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
    });

app.get('/', function (req, res) {
    var searchTerm = req.query.searchTerm;
    res.render('search');
    });

app.get('/search', function (req, res, next){
    var searchTerm = req.query.searchTerm;
    let query = "SELECT * FROM restaurant WHERE \
    restaurant.name ILIKE '%$1#%'";
    db.any(query, searchTerm)
    .then(function(resultsArray){
        res.render('search-results', {results: resultsArray});
    })
    .catch(next)
});

app.get('/restaurant/:id', function (req, res, next){
    var searchTerm = req.query.searchTerm;
    let query = "SELECT * FROM restaurant WHERE restaurant.id = ${id}";
    let id = req.params.id;
    db.any(query, {searchTerm, id})
    .then(function(resultsArray){
        res.render('restaurant', {results: resultsArray});
    })
    .catch(next)
});

app.listen(8000, function () {
    console.log('Listening on port 8000');
    });