var express = require('express');
    nunjucks = require('nunjucks');
    body_parser = require('body-parser');
    pgp = require('pg-promise')({ });
    db = pgp({database: 'restaurant_v2', user: 'postgres'});
    session = require('express-session');
    pbkdf2 = require('pbkdf2');
    passhelper = require('pbkdf2-helpers');
    crytpo = require('crypto');
    app = express();



app.use(express.static(__dirname + "/public"));
app.set('view engine', 'html');
app.use(body_parser.urlencoded({extended: false}));


nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
    });

app.use(session({
    secret: process.env.SECRET_KEY || 'dev',
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge: 60000}
  }));

var open_pages = ['/', '/login', '/signup', '/logout'];
app.use(function (req, res, next) {
    if (req.session.username || open_pages.indexOf(req.path) > -1) {
      next();
    } else {
      res.redirect('/login');
    }
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


app.get('/restaurant/new', function (req, res){
    res.render('new-restaurant');
});

app.post('/restaurant/new', function (req, res, next){
    var r_name = req.body.r_name;
    var r_address = req.body.r_address;
    var r_category = req.body.r_category;
    var query = "INSERT INTO restaurant VALUES(DEFAULT, ${r_name}, ${r_address}, ${r_category})";
    db.result(query, {r_name, r_address, r_category})
    .then(function(){
        res.redirect('/');
    })
    .catch(next)
})


app.get('/restaurant/:id', function (req, res, next){
    var searchTerm = req.query.searchTerm;
    let id = req.params.id;
    let query = 'SELECT restaurant.id AS id, restaurant.name AS restaurant_name, restaurant.address AS address,\
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

app.post('/restaurant/:id', function (req, res, next){
    var r_title = req.body.r_title;
    var star = req.body.star;
    var r_par = req.body.r_par;
    let id = req.params.id;
    let query = "INSERT INTO review VALUES(DEFAULT, ${star}, ${r_title}, ${r_par}, 1, ${id})";
    db.result(query, {r_title, star, r_par, id})
    .then(function(){
        res.redirect('/restaurant/' + id);
    })
    .catch(next)
});


app.get('/login', function (req, res) {
    res.render('login');
  });

app.post('/login', function (req, res, next) {
var username = req.body.username;
var password = req.body.password;
if (username && password) {
    let query = "SELECT id, username, password FROM users WHERE username = ${username}";
    db.query(query, {username, password})
    .then(function(result){
        if (passhelper.matches(password, result[0].password)) {
            req.session.username = username;
            req.session.userid = result[0].id;
            console.log('loggedin')
            res.redirect('/');
        } else {
            console.log('No');
            res.render('login');
        }
    })
    .catch(next)
} else {
    res.render('login');
}
});

app.get('/signup', function (req, res) {
    res.render('signup');
  });

app.post('/signup', function (req, res, next) {
var username = req.body.username;
var password = req.body.password;
if (username && password) {
    req.session.user = username;
    var hash = passhelper.create_hash(password);
    var db_storage_text = passhelper.generate_storage(hash);
    let query = "INSERT INTO users VALUES(DEFAULT, ${username}, ${db_storage_text})";
    db.result(query, {username, db_storage_text})
    .then(function(){
        res.redirect('/');
    })
    .catch(next)
} else {
    res.render('signup');
}
});

app.get('/logout', function (req, res){
    req.session.destroy()
    res.redirect('/login')
});

app.listen(8000, function () {
    console.log('Listening on port 8000');
    });