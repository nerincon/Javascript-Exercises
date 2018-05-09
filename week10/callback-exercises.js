function add (x, y, callback){
    var result = x + y;
    callback(result);
}

add(20, 25, function(result){console.log(result); });


// // SYNCHRONOUS --> different from callback function which is asynchronous.
// function add2 (x, y){
//     var result = x + y
//     return result;
// }

// var r = add2(20, 25);
// console.log(r);

function substract (x, y, callback){
    var result2 = x - y;
    callback(result2);
}

substract(10, 5, function(result2){console.log(result2);});

function greeting (person, callback){
    var greet = 'Hola ' + person + '!';
    callback(greet)
}

greeting('Nelson', function(greet){console.log(greet);});


function product(numbers) {
    var output = numbers.reduce((acc, val) => 
    {
        return acc * val
    }, 4);
    console.log(output);
}

product([5,5])

// ADDING SETTIMEOUT FUNCTION TO THE CALLBACK FUNCTIONS ABOVE

function add (x, y, callback){
    setTimeout(function () {
        var result = x + y;
        callback(result);
    },2000);
}

add(20, 25, function(result){console.log(result); });


function substract (x, y, callback){
    setTimeout(function () {
        var result2 = x - y;
        callback(result2);
    },2000);
}

substract(10, 5, function(result2){console.log(result2);});

function greeting (person, callback){
    setTimeout(function () {
    var greet = 'Hola ' + person + '!';
    callback(greet)
    },2000);
}

greeting('Nelson', function(greet){console.log(greet);});


function product(numbers) {
    setTimeout(function () {
    var output = numbers.reduce((acc, val) => 
    {
        return acc * val
    }, 4);
    console.log(output);
    },2000);
}

product([5,5])