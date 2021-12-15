const mymodule = require('./module-read.js');
const arg = 'hola.md';

if (require.main === module){
    mymodule.readFileData(arg)
    .then(r=>{
        console.log(r);
    })
    .catch(err=>console.log("This is why this promise is failing: " + err))
}