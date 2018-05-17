var request = require('request');
var fs = require('fs');
const cheerio = require('cheerio');



var url = 'https://en.wikipedia.org/wiki/List_of_programming_languages#B';
// function programmingLanguages(url, callback) {
  request.get(url, function(err, response, body) {
    if (err) {
      callback(err);
      return;
    }
    const $ = cheerio.load(body);
    $('a').each(function() {
    var text = $(this).text();
    var link = $(this).attr('href')
    console.log(link)
    });
  });
// }

// module.exports = saveWebPage;