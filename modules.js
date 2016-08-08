var modules = require("./modules/files");
var dirname = process.argv[2] ;
var extname = process.argv[3] ;

modules( dirname ,extname , function (err , datas)
{
   datas.forEach(function(data){
       console.log(data);
   });
});
