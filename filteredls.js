var fs = require("fs");

var file = process.argv[2];
var ext = "."+process.argv[3];

var endext = function(file){
	return file.endsWith(ext);
}

fs.readdir(file, function(err, list){
	list = list.filter(endext);
	console.log(list.join("\n"));
});