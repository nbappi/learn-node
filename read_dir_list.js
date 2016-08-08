var fs = require("fs");

var path = process.argv[2];
 
fs.readdir(path, function(err, items) {
   // console.log(items);
    for( var i=0; i<= items.length; i++){
       var file = path+'/'+ items[i];
//     console.log(file);
       fs.stat(file , function(err , stats){
  //       console.log( file );
        console.log( stats);
       });
    }
});

