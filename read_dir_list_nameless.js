var fs = require("fs");
var path = process.argv[2];

fs.readdir(path , function( err , items){
   for(var i=0; i< items.length; i++){
      var file = path +'/'+items[i];
      fs.stat(file , function(f){
          return function(err, stats){
              console.log(f);
              console.log(stats);
          }
     }(file));
   }
});

/// node filename.js ~/Desktop/dir
