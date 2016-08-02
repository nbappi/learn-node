var fs = require("fs");

function callback(err , data)
{
    if( err ) throw err ;

    for( var i = 0; i < data.length; i++){
        var split = data[i].split('.');
        if(split[1] == "md"){
            console.log(data[i]);
        }
    }
}

fs.readdir(process.argv[2] , callback);