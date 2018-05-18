var express = require('express');
    nunjucks = require('nunjucks');
    body_parser = require('body-parser');
    pgp = require('pg-promise')({ });
    db = pgp({database: 'ToDo_db', user: 'postgres'});
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
    res.render('welcome');
    });

app.get('/todos', function (req, res, next) {
    let query = "SELECT * FROM task"
    db.any(query)
    .then(function(resultsArray){
        res.render('todos', {results: resultsArray});
    })
    .catch(next)
});

app.get('/todos/add', function(req, res){
    res.render('add-todo')
});

app.post('/todos/add', function (req, res, next){
    let term = req.body.task;
    let query = "INSERT INTO task VALUES(DEFAULT, ${term}, 'false')"
    db.result(query, {term})
    .then(function(){
        res.redirect('/todos');
    })
    .catch(next)
});

app.get('/todos/done/:id', function (req, res){
    let id = req.params.id;
    res.render('done-todo')
});

app.post('/todos/done/:id', function (req, res, next){
    let term = req.body.mark;
    let id = req.params.id;
    let query = "UPDATE task SET done = ${term} WHERE id = ${id}"
    if(term === "true" || term === "false") {
        db.result(query, {term, id})
        .then(function(){
            res.redirect('/todos');
        })
        .catch(next)
    } else {
        res.render('done-todo', {error: 'your wrong'});
    }
});


app.listen(8000, function () {
    console.log('Listening on port 8000');
    });