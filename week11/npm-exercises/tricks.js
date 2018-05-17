// MAKE YOUR OWN MODULE - Save Web Page


var request = require('request');
var fs = require('fs');


var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';
function saveWebPage(url, filename, callback) {
  request.get(url, function(err, response, html) {
    if (err) {
      callback(err);
      return;
    }
    var html = html;
    fs.writeFile(filename, html, function(err) {
      if (err) {
        callback(err);
        return;
      }
      console.log('wrote file')
      callback(html);
    });
  });
}

module.exports = saveWebPage;