import { readFileData, validate } from './module-read.js'; 
const arg = 'hola.md';


    readFileData(arg)
    .then(links=>{
        validate(links);
    })
    .catch(err=>console.log("This is why this promise is failing: " + err))
