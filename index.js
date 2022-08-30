import greet from './greet.js';
import chalk from 'chalk';

import fun from 'everyday-fun';

const guess = fun.getRandomRiddle();

console.log(guess.riddle);

setTimeout(function() {
    console.log(guess.answer);
}, 5000);

console.log(chalk.blue.bgRed.bold('Hello world!'));

console.log(greet('shado'))
