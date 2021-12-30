#!/usr/bin/env node

import figlet from 'figlet';
import chalk from 'chalk';
/* import path from 'path'; */
import {mdLinks} from './module-read.js';

figlet('Welcome dc-md-links!!', function(err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});


// Prueba con CLI
const pathFile = process.argv[2];
const validateOption = process.argv[3];

/* // Prueba con  Javascript API
const pathFile = 'hola.md';
const validateOption = ' '; */


const options = {
  validate: false,
};

if (validateOption === '--validate') {
  options.validate = true;
} else if (validateOption !== '--validate' ) {
  options.validate = false;
}


mdLinks(pathFile, [validateOption])
    .then((links) => {
      if (options.validate === false) {
        links.map((link) => {
          console.log(chalk.green(link.type) + ' ' + chalk.yellow(link.href) + ' ' + chalk.blue(link.text));
        });
      } else if (options.validate === true) {
        links.map((link) => {
          if (link.response === 'OK') {
            console.log(chalk.yellow(link.type)+' '+ chalk.magenta(link.href)+" "+chalk.bgGreen(link.status)+" "+chalk.bgGreen(link.response));
          } else if (link.response === 'fail') {
            console.log(chalk.yellow(link.type)+' '+ chalk.magenta(link.href)+' '+chalk.bgRed(link.status)+ ' ' +chalk.bgRed(link.response));
          }
        });
      }
    })
    .catch((err) => {
      console.log(chalk.magenta(err));
    });
