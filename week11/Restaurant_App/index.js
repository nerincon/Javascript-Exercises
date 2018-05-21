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
    let id = req.params.id;
    let query = 'SELECT restaurant.name AS restaurant_name, restaurant.address AS address,\
    restaurant.category AS category FROM restaurant WHERE restaurant.id = ${id};\
    SELECT reviewer.name AS reviewer_name, review.title AS review_title,\
    review.review AS review, review.stars AS stars FROM review\
    JOIN restaurant ON restaurant.id = restaurant_id\
    JOIN reviewer ON reviewer.id = reviewer_id WHERE restaurant.id = ${id}'
    db.multi(query, {searchTerm, id})
    .then(data => {
        // data[0] = result from the first query;
        // data[1] = result from the second query;
        res.render('restaurant', {data: data[0], data2: data[1]});
    })
    .catch(next)
});


app.listen(8000, function () {
    console.log('Listening on port 8000');
    });