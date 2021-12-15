const fs = require('fs');
/* const fetch = require('node-fetch'); */
const path = require('path');


const readFileData = (arg) => {
  return new Promise((resolve, reject)=>{
    const ext = path.extname(arg);
    if(ext==='.md'){
      fs.readFile(arg,'utf8', (err, data)=>{
        resolve(data);
      });
    }
    reject('this file is not .md');
  })
}

module.exports = {
  readFileData,
}


