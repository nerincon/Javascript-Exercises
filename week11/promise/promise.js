var rp = require('request-promise');
var fs = require('fs');
var fsp = require('fs-promise')


// WEB SCRAPING - USING request-promise and promise_all.
var p1 = rp('https://en.wikipedia.org/wiki/Futures_and_promises')
.then(function (htmlString) {
    console.log(htmlString)
})
.catch(function (err) {
    console.error(error)
});

var p2 = rp('https://en.wikipedia.org/wiki/Continuation-passing_style')
.then(function (htmlString) {
    console.log(htmlString)
})
.catch(function (err) {
    console.error(error)
});

var p3 = rp('https://en.wikipedia.org/wiki/JavaScript')
.then(function (htmlString) {
    console.log(htmlString)
})
.catch(function (err) {
    console.error(error)
});

var p4 = rp('https://en.wikipedia.org/wiki/Node.js')
.then(function (htmlString) {
    console.log(htmlString)
})
.catch(function (err) {
    console.error(error)
});

var p5 = rp('https://en.wikipedia.org/wiki/Google_Chrome')
.then(function (htmlString) {
    console.log(htmlString)
})
.catch(function (err) {
    console.error(error)
});

Promise.all([p1, p2, p3, p4, p5])
.then(function (responses) {
    console.log('Got html');
})
.catch(function (error){
    console.error(error)
});


// Chaining - fs-promise deprecated so used request-promise
var url = 'https://www.google.com'
var filename = 'promise-save.html'

function saveWebPage (url, filename) {
    var promise = new Promise(function (resolve, reject) {
      try {
        rp(url)
        .then(function (htmlString) {
        return htmlString
    })
        .then (function (htmlString){
        fs.writeFile(filename, htmlString, function(err) {
            if(err){
                console.error(err)
            }
            else{
                console.log('wrote file')
            }
        })
        })
        }catch (error) {
            reject(error);
          }
        })
        return promise;
    };
saveWebPage(url, filename)


// Cat 2 Files

var file1 = 'temp.html'
var file2 = 'promise-save.html'
var output_comb = 'combined.html'

function combinePage (file1, file2, output_comb) {
    var promise = new Promise(function (resolve, reject) {
      try {
        fsp.readFile(file1)
         .then(function (buffer){
            console.log('start read file1')
            var contents = buffer.toString().toUpperCase()
            return contents
         })
         .catch(function(error){
             console.error(error)
         })
         .then(function (contents){
            fsp.appendFile(output_comb, contents)
            console.log('appended contents on output file')
         })
         .catch(function(error){
             console.error(error)
        })
         fsp.readFile(file2)
         .then(function (buffer){
            console.log('start read file2')
            var contents = buffer.toString().toUpperCase()
            return contents
         })
         .catch(function(error){
             console.error(error)
         })
         .then(function (contents){
            fsp.appendFile(output_comb, contents)
            console.log('appended contents2 on output file')
         })
         .catch(function(error){
             console.error(error)
        })
        }
        catch (error) {
            console.log('error at function')
            reject(error);
          }
        })
        return promise;
    };

combinePage(file1, file2, output_comb)
