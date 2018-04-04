const inquirer   = require('inquirer');
const files      = require('./files');

module.exports = {

  askRequiredInformation: () => {
    const questions = [
      {
        name: 'season',
        type: 'input',
        message: 'Enter the Season number:',
        validate: function( value ) {
          if (typeof value === "number") {
            return true;
          } else {
            return 'Please enter a number!';
          }
        }
      },
      {
        name: 'episode',
        type: 'input',
        message: 'Enter the Episode number:',
        validate: function(value) {
          if (typeof value === "number") {
            return true;
          } else {
            return 'Please enter a number!';
          }
        }
      }
      ,
      {
        name: 'puzzle',
        type: 'input',
        message: 'Enter the Puzzle name:',
        validate: function(value) {
          if (typeof value === "string") {
            return true;
          } else {
            return 'Please enter a string!';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },

  choiceCategory: () => {
    const questions = [
      {
        name: 'category',
        type: 'list',
        message: 'Choice a category:',
        choices: [ 'Classic Puzzles',  'Community Puzzles', 'Contests' ]
        // validate: function( value ) {
        //   if (typeof value === "number") {
        //     return true;
        //   } else {
        //     return 'Please enter a number!';
        //   }
        // }
      }
    ];
    return inquirer.prompt(questions);
  },


  choiceThemes: () => {
    const questions = [
      {
        name: 'theme',
        type: 'checkbox',
        message: 'Choice a theme(s):',
        choices: [
            'Arrays',
            'BFS',
            'Backtracking',
            'Binary Search',
            'Binpacking',
            'Conditions',
            'Cryptography',
            'Distances',
            'Dynamicprogramming',
            'Encoding',
            'Floodfill',
            'Graphs',
            'Hashtables',
            'Intervals',
            'Lists',
            'Loops',
            'MachineLearning',
            'Memoization',
            'Minimax',
            'Multi-agent',
            'Optimization',
            'Pathfinding',
            'Patternrecognition',
            'Queues',
            'Recursion',
            'Simulation',
            'Simulation',
            'State machine',
            'Strings',
            'Trigonometry'
        ]
        // validate: function( value ) {
        //   if (typeof value === "number") {
        //     return true;
        //   } else {
        //     return 'Please enter a number!';
        //   }
        // }
      }
    ];
    return inquirer.prompt(questions);
  },
}