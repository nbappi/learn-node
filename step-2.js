var fs = require("fs"),
     string = fs.readFileSync(process.argv[2]).toString();

var split = string.split('\n');
var lines = split.length - 1 ;

console.log( lines );