var http = require("http");
var port = 8003;

var cs = http.createServer();

console.log(cs._events.connection);

cs.on("request" , function(req , res){
   res.writeHead(200);
   console.log("Method: "+req.method);
   console.log("Url : " +req.url);
   console.log(req.headers);
   
   var data = "";
   req.on("data", function(items){
      data +=items.toString();
   });
   
   req.on("end" , function(){
      console.log("End ");
      console.log(data);
      res.write("Hello \n");
      res.end();
   });
});

cs.listen(port);

console.log("Browse : http:// 127.0.0.1 :"+port);

// Curl request

// curl --data "field=value" http://127.0.0.1:8003
