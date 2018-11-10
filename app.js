var execProcess = require("./process.js");
execProcess.result("sh git.sh", function(err, response){
    if(!err){
        console.log(response);
    }else {
        console.log(err);
    }
});
