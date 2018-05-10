var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
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