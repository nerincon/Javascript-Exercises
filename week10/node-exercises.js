var fs = require('fs');
var dns = require('dns');
var request = require('request');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

// Read a file

rl.question("Filename: ", function(filename) {
    rl.close();
    fs.readFile(filename, function (error, buffer) {
        if (error) {
        console.error(error.message);
        return;
        }
        console.log('File Data: ', buffer.toString().toUpperCase());
    });
});


// DNS Lookup

rl.question("Domain Name: ", function(url) {
    rl.close();
    dns.lookup(url, (error, address, family) =>
    {
        if (error) {
        console.error(error.message);
        return;
        }
        console.log('IP Address: ', address);
    });
});

// Read and write
rl.question("Filename: ", function(filename) {
    fs.readFile(filename, function (error, buffer) {
        if (error) {
        console.error(error.message);
        return;
        }
        var contents = buffer.toString().toUpperCase();
        rl.question("Filename: ", function(filename2) {
            rl.close();
            fs.writeFile(filename2, contents, function (error) {
            if (error) {
                console.error(error.message);
                return;
            }
            console.log('Wrote to file ', filename2);
            });
        });
    });
});


// Save a web page

rl.question("URL (please insert full url): ", function(url) {
    request.get(url, function (error, response, html) {
        if (error) {
            console.error(error.message);
            return;
        }
        var data = html;
        rl.question("Filename: ", function(file) {
            rl.close();
            fs.writeFile(file, data, function (error) {
                if (error) {
                    console.error(error.message);
                    return;
                }
                console.log('Wrote to file ', file);
            });
        });
    });
});