import chalk from 'chalk';
import { readFileData, validate } from './module-read.js'; 

const arg = 'holanda.md';


    readFileData(arg)
    .then(links=>{
        validate(links)
        .then(res => {
            res.map(link => {
                if (link.response === "OK") {
                  console.log(chalk.yellow(link.type)+ " " + chalk.magenta(link.href)+" "+chalk.bgGreen(link.status)+" "+chalk.bgGreen(link.response));
                } else if (link.response === "fail"){
                  console.log(chalk.yellow(link.type)+ " " + chalk.magenta(link.href)+" "+chalk.bgRed(link.status)+" "+chalk.bgRed(link.response));
            }
              })
        })
    })

        .catch(err=> {
            console.log(chalk.magenta(err))});
