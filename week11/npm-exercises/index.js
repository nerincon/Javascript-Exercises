// Use the marked module --------------------
const fs = require('fs')
var marked = require('marked')
var helloTxt = fs.readFileSync('./hello.md', {encoding: 'utf8'})

console.log(helloTxt)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

console.log(marked(helloTxt))


//Loadash ----------------------------

var _ = require('lodash');

var arr = [1,2,3,4,5,6,7,8,9]
var s =_.shuffle(arr);
console.log(s)

var request = require('request');
var cheerio = require('cheerio');

request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

/* <ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul>

var $ = cheerio.load('<ul id="fruits">...</ul>'); */



// MAKE YOUR OWN MODULE - Save Web Page - Using Module from tricks.js

var request = require('request');
var fs = require('fs');
var saveWebPage = require('./tricks.js')
var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';
saveWebPage(url, filename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});