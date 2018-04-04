const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const CLI = require('clui');
const Spinner = CLI.Spinner

const inquirer = require('./lib/inquirer');

const run = async () => {
  const credentials = await inquirer.askRequiredInformation()
  console.log(credentials);
  clear()

  console.log("This video is intended for enhance algorithm mindset purposes")
  console.log("Just relax there are no specific requirements & learnings")
  console.log("")
  console.log("Please see the video description for more information")
  console.log("")
  // console.log(
  //   chalk.yellow('Press any key to continue...')
  // )
  await inquirer.confirmation()
  clear()

  console.log(
    chalk.red(
      figlet.textSync('Season - ' + credentials.season, { horizontalLayout: 'full' })
    )
  )
  console.log('')
  console.log(
    chalk.yellow(
      figlet.textSync('Episode - ' + credentials.episode, { horizontalLayout: 'full' })
    )
  )
  console.log('')

  await inquirer.choiceCategory()
  await inquirer.choiceThemes()
  // TODO: add spiner
  const searching = new Spinner('Database matching, please wait...')
  searching.start()

  setTimeout(() => {
    searching.stop()
    clear()
    console.log(
      chalk.red(
        figlet.textSync(credentials.puzzle, { horizontalLayout: 'full' })
      )
    )

    const loading = new Spinner('Loading puzzle in progress...')
    loading.start()

  }, 2000)

}

clear()
console.log(
  chalk.yellow(
    figlet.textSync('Codeingame', { horizontalLayout: 'full' })
  )
)

run()
