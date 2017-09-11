
const os = require('os');

function checkSystem(){
    return new Promise(function(resolve, reject){
        if(os.totalmem < 2e6)
            reject("Program requires at least 2GB Memory"); 
        else if(os.cpus().length < 2)
            reject("Processor not supported"); 
        else
            resolve('System is Chekced Successfully');
    }); 
}
console.log("Checking your System...");
checkSystem()
    .then( d => console.log(d))
    .catch(err => console.log(err) );