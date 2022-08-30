import greet from './greet.js';
import chalk from 'chalk';

import fun from 'everyday-fun';

const guess = fun.getRandomQuote();

console.log(guess.quote);

setTimeout(function() {
    console.log(guess.author);
}, 5000);

//console.log(chalk.blue.bgRed.bold('Hello world!'));

//console.log(greet('shado'))
