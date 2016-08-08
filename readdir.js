var fs = require("fs");
var path = require("path");
var ext = process.argv[3];
var folders = process.argv[2];

function callback(err , data)
{
    if( err ) return console.log(err) ;

    data.forEach(function(file){
        if( path.extname(file) == "."+ ext){
            console.log(file);
        }

    });
}

fs.readdir(folders , callback);