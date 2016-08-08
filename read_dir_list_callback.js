var fs = require("fs");
var path = process.argv[2];

fs.readdir(path , function( err , items){
   for(var i=0; i< items.length; i++){
      var file = path +'/'+items[i];
      fs.stat(file , generate_callback(file));
   }
});

function generate_callback(file){
    return function( err , stats){
       console.log(file);
       console.log(stats);
    }
}

/// node filename.js ~/Desktop/dir
