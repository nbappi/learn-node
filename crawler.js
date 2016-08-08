var http = require("http");

http.get(process.argv[2], function(res){
   var content = '';
   console.log("Get status : " + res.statusCode);
   res.on("data", function(chunk){
       content += chunk;
//       console.log(chunk.toString());
       console.log('Each chunk: ' + chunk.length);
   });

   res.on("end" , function(e){
       console.log("End ");
       console.log("Total length : " + content.length);
     // console.log(content);
   });
}).on("error", function(e){
     console.log("Error : "+ e.message);
});
