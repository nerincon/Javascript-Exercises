// Function Exercises

// Even Numbers
var A = []
function evenNumbers(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            A.push(arr[i])
        }
    }
}
evenNumbers([1,2,3,4,5,6,7,8,9,10])
console.log(A)

// Square the Numbers
var A2 = []
function evenNumbers(arr){
    for(var i = 0; i < arr.length; i++){
        A2.push(arr[i] * arr[i])
    }
}
evenNumbers([1,2,3,4,5,6,7,8,9,10])
console.log(A2)

//OR
var a = [1, 2, 3, 4];
function times2 (n) {
  return n * 2;
}
var doubled = a.map(times2);
console.log(doubled)

// Cities
var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];

  function city(d){
      for(var i = 0; i < d.length; i++){
          if(d[i]['temperature'] < 70){
              console.log(d[i])
          }
      }
  }
  city(cities)

// Good Job
var people = ['Dom','Lyn','Kirk','Autumn','Trista','Jesslyn','Kevin','John','Eli','Juan','Robert','Keyur',
    'Jason','Che','Ben'];

function goodJob(p){
    for(var i = 0; i < p.length; i++){
        console.log("Good Job " + p[i] +"!")
    }
}
goodJob(people)

// Sort an array
var people = ['Dom','Lyn','Kirk','Autumn','Trista','Jesslyn','Kevin','John','Eli','Juan','Robert','Keyur',
    'Jason','Che','Ben'];

people.sort(function (x, y) {
    if (x > y) { return 1; }
    else if (x < y) { return -1; }
    return 0;
    });
console.log(people)

// Sort an array, 2 :: By name length
var people = ['Dom','Lyn','Kirk','Autumn','Trista','Jesslyn','Kevin','John','Eli','Juan','Robert','Keyur',
    'Jason','Che','Ben'];

people.sort(function (x, y) {
    if (x.length > y.length) { return 1; }
    else if (x.length < y.length) { return -1; }
    return 0;
    });
console.log(people)

// 3 times

function call3Times(fun) {
    for(var i = 0; i < 3; i++){
        console.log(fun)
    }
  }

call3Times('Hello World!')

// n times

function callNTimes(n, fun) {
    for(var i = 0; i < n; i++){
        console.log(fun)
    }
  }

callNTimes(5,'Hello World!')

// Sum an array

function sum(arr){
    var output = arr.reduce((acc, val) => acc + val)
    console.log(output)
}
sum([1,2,3])


// Acronym
function acronym(arr){
    var output = arr.reduce((acc,val) => {
        return acc.concat(val[0]);
    }, '');
    console.log(output.toUpperCase())
}

acronym(['very', 'important', 'person'])
acronym(['national', 'aeronautics', 'space', 'administration'])


// FOR EACH
var names = [
    { first_name: 'Bob', last_name: 'Vance' },
    { first_name:'Alice', last_name: 'Wonderland' },
    { first_name:'Joe', last_name: 'Doe' }
  ];
  
names.forEach(function(p) {
    console.log('Hello, ' + p.first_name + ' ' + p.last_name + '!');
});