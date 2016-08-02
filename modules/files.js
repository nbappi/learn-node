var fs = require("fs"), path = require("path");

module.exports = function(dirname, extname, callback)
{
     fs.readdir(dirname , function( err , files){
        if(err) return callback(err);

        files = files.filter(function (file){
              return path.extname(file) == '.'+extname;

        });

         callback(null, files);
     });    
}
