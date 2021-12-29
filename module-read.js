import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

/* const path = require('path'); */
import markdowndLinkExtractor from 'markdown-link-extractor';

export const readFileData = (arg) => {
  return new Promise((resolve, reject) => {
    fs.readFile(arg, 'utf8', (err, data) => {
      const ext = path.extname(arg);// leer ruta del documento y trabajarla
      let links = markdowndLinkExtractor(data, true);
      const linksArray = [];
      links.forEach((details) => {
        /* console.table({details}) */
        linksArray.push(details);

        if (ext === '.md') {
          resolve(linksArray);
        } else if (ext !== '.md') {
          reject('this file is not .md' + (err));
        }
      });
    });
  })
      // .then(file => console.log(file))
      .catch(err => console.log('Ingresa un archivo con extension .md', err));
};

export const validate = (links) => {
  return Promise.all(links.map(link => {
    return new Promise((resolve, reject) => {
      fetch(link.href)
          .then(res => {
            if (res.status > 400) {
              link.status = res.status;
              link.response = 'fail';
              resolve(link);
            } else {
              link.status = res.status;
              link.response = res.statusText;
              resolve(link);
            }
          })
          .catch(err => {
            link.status = null;
            link.response = 'fail';
            resolve(link);
          });
    });
  }));
};


export const mdLinks = (path, option) => {
  return new Promise((resolve, reject) => {
    if (option[0] !== '--validate') {
      readFileData(path)
          .then(links => {
            resolve(links);
          })
          .catch(err => {
            reject(err);
          });
    } else if (option[0] === '--validate') {
      readFileData(path)
          .then(links => {
            validate(links)
                .then(res => {
                  resolve(res);
                });
          });
    } else {
      reject((err));
    };
  });
};

