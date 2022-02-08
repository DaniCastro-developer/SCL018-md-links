import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import {marked} from 'marked';


// función que lee el documento y extrae los links
export const readFileData = (arg) => {
  return new Promise((resolve, reject) => {
    fs.readFile(arg, 'utf8', (err, data) => {
      const ext = path.extname(arg);// leer ruta del documento y trabajarla
      if (ext !== '.md') {
        reject(new Error('this file is not .md '));
      };
      const links = [];
      const renderer = new marked.Renderer();
      renderer.link = (href) => {
        if (!href.startsWith('#')) {
          links.push({
            text: href,
            href: href,
            type: 'link',
            file: arg,
          });
        };
      };

      renderer.image = function(href) {
        if (!href.startsWith('#')) {
          href = href.replace(/ =\d*%?x\d*%?$/, '');
          links.push({
            href: href,
            text: href,
            type: 'image',
            file: arg,
          });
        };
      };
      marked(data, {renderer: renderer});
      if (links.length === 0) {
        reject(new Error('no links found'));
      }
      resolve(links);
    });
  });
};

// validar links --validate
export const validate = (links) => {
  return Promise.all(links.map((link) => {
    return new Promise((resolve, reject) => {
      fetch(link.href)
          .then((res) => {
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
          .catch((err) => {
            link.status = null;
            link.response = 'fail';
            resolve(link);
          });
    });
  }));
};


// función md-links
export const mdLinks = (path, option) => {
  return new Promise((resolve, reject) => {
    if (option[0] !== '--validate') {
      readFileData(path)
          .then((links) => {
            resolve(links);
          })
          .catch((err) => {
            reject(err);
          });
    } else if (option[0] === '--validate') {
      readFileData(path)
          .then((links) => {
            validate(links)
                .then((res) => {
                  resolve(res);
                });
          });
    } else {
      reject(err);
    };
  });
};
