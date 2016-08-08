var http = require("http");
var bl = require("bl");

http.get(process.argv[2], function(response){
     var resData = [];
     response.pipe(bl(function(err , data){
        console.log(data.toString());
        console.log(data.toString().length);
     }));
  
     response.on("error" , function(){
        console.log(resData);
        console.log("Error");
     });
});