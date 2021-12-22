const fs = require('fs');
/* const fetch = require('node-fetch'); */
const path = require('path');
const markdowndLinkExtractor = require('markdown-link-extractor'); 



const readFileData = (arg) => {
  return new Promise((resolve, reject) => {
    
      fs.readFile(arg, 'utf8', (err, data) => { 
        const ext = path.extname(arg);//leer ruta del documento y trabajarla 
        let links = markdowndLinkExtractor(data,true);
        const linksArray = [];
          links.forEach((details)=>{ 
              console.table({details})
              linksArray.push(details);

              if (ext === '.md') {         
                resolve(linksArray); // promesa que pasa a estar resuelta y muestra el archivo con extensión .md
       } else if (ext !== '.md') {
                reject('this file is not .md' + err); //Promesa que marca el error del documento
       }
          });   
        
    })
  })

// .then(file => console.log(file))
    .catch(err => console.log('Ingresa un archivo con extension .md', err));
      }


module.exports = {
  readFileData,
}


