var express = require('express');
    nunjucks = require('nunjucks');
    body_parser = require('body-parser');
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
    res.send('Hello World!');
    });

app.get('/cats', function (req, res) {
    res.send('Meow');
})

app.get('/dogs', function (req, res){
    res.send('Woof');
});

app.get('/cats_and_dogs', function (req, res){
    res.send('Living together');
});

// //ROUTE PARAMENTERS
// app.get('/greet/:name', function (req, res){
//     var name = req.params.name;
//     res.send('Hello ' + name + '!');
// });


// //QUERY PARAMETERS --> Using ? and & in URL
// app.get('/year', function (req, res){
//     var year = req.query.year || '2000';
//     res.send('You were born in ' + year)
// });


app.get('/greet/:name', function (req, res){
    var name = req.params.name || 'World';
    var year = (new Date()).getFullYear() - req.query.age || '0';
    var context = {name: name, year: year};
    res.render('index', context);
});



app.get('/fav_animals', function (req, res){
    var animals_list = [
        { name: 'cats', favorite: true },
        { name: 'dogs', favorite: true },
        { name: 'tree frogs', favorite: true },
        { name: 'earth worms', favorite: false },
        { name: 'guinea pigs', favorite: true },
      ];
    var animals = {animals:animals_list}
    res.render('fav_animals', animals);
});



app.listen(8000, function () {
    console.log('Listening on port 8000');
    });