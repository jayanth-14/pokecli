const chalk = require('chalk');

const showNoArgsError = () => {
    console.log(chalk.bgRed('No arguments passed. please pass all the required arguments.'));
    console.log(chalk.greenBright('type `-help` for retrieving all commands'));
    return;
};

module.exports = {showNoArgsError};