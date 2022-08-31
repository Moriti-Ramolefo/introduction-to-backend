import greet from './greet.js';
import chalk from 'chalk';

import fun from 'everyday-fun';
import figlet from 'figlet';

figlet('...Riddler...', function (err, result) {
    console.log(chalk.blue.bgBlackBright.bold(result));

    const guess = fun.getRandomRiddle();

    console.log(chalk.bgGreen(guess.riddle));

    setTimeout(function () {
        console.log(chalk.blue.bgBlack.bold(guess.answer));
    }, 5000);

});

// console.log(chalk.blue.bgRed.bold('Hello world!'));

// console.log(greet('shado'))
