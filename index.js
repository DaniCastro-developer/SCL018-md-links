const mymodule = require('./module-read');
const arg = 'holanda.md';

if (require.main === module){
    mymodule.readFileData(arg)
    .then(r=>{
        console.log(r);
    })
    .catch(err=>console.log("This is why this promise is failing: " + err))
}