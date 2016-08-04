var http = require("http");

http.get(process.argv[2], function(response){

   response.setEncoding("utf8");
   response.on("data", function( items){
       console.log(items.toString());
   });

    response.on('error', function(){
        console.log("Error found");
    });

});
