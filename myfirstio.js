var fs = require("fs");

var file = process.argv[2];

var ok = fs.readFileSync(file, 'utf8');

ok=ok.split("\n").length-1;

console.log(ok);