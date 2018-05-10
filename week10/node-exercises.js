var fs = require('fs');
var dns = require('dns');
var request = require('request');
var sharp = require('sharp');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

// // Read a file

// rl.question("Filename: ", function(filename) {
//     rl.close();
//     fs.readFile(filename, function (error, buffer) {
//         if (error) {
//         console.error(error.message);
//         return;
//         }
//         console.log('File Data: ', buffer.toString().toUpperCase());
//     });
// });


// // DNS Lookup

// rl.question("Domain Name: ", function(url) {
//     rl.close();
//     dns.lookup(url, (error, address, family) =>
//     {
//         if (error) {
//         console.error(error.message);
//         return;
//         }
//         console.log('IP Address: ', address);
//     });
// });

// // Read and write
// rl.question("Filename: ", function(filename) {
//     fs.readFile(filename, function (error, buffer) {
//         if (error) {
//         console.error(error.message);
//         return;
//         }
//         var contents = buffer.toString().toUpperCase();
//         rl.question("Filename: ", function(filename2) {
//             rl.close();
//             fs.writeFile(filename2, contents, function (error) {
//             if (error) {
//                 console.error(error.message);
//                 return;
//             }
//             console.log('Wrote to file ', filename2);
//             });
//         });
//     });
// });


// // Save a web page

// rl.question("URL (please insert full url): ", function(url) {
//     request.get(url, function (error, response, html) {
//         if (error) {
//             console.error(error.message);
//             return;
//         }
//         var data = html;
//         rl.question("Filename: ", function(file) {
//             rl.close();
//             fs.writeFile(file, data, function (error) {
//                 if (error) {
//                     console.error(error.message);
//                     return;
//                 }
//                 console.log('Wrote to file ', file);
//             });
//         });
//     });
// });

var options = {
    url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    encoding: null
  };

var filename = 'js-logo.png'
request(options, function(err, response, imageData) {
if (err) 
{
    console.error(error.message);
    return;
}
    var image = imageData;
// save image data and resize
    fs.writeFile(filename, image, function (error) {
        if (error) {
            console.error(error.message);
            return;
        }
        sharp(image)
        .resize(250, 250, {
            kernel: sharp.kernel.nearest
        })
        .background('white')
        .embed()
        .toFile('js-logo.png')
        .then(function() {
        console.log('Wrote to file ', filename);
    });
        });
    });