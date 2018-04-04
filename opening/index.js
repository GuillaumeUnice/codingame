const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');

const inquirer  = require('./lib/inquirer');

const run = async () => {
  const credentials = await inquirer.askRequiredInformation();
  console.log(credentials);
}

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Codeingame', { horizontalLayout: 'full' })
  )
);


run();