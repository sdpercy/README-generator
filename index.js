// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
            return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of your GitHub repository?',
        default: 'readme-generator',
        validate: githubRepoInput => {
            if (githubRepoInput) {
                return true;
            } else{
                console.log('Please enter a valid GitHub repository');
                return false;
            }
            
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: projectDescriptionInput => {
            if (projectDescriptionInput) {
                return true;
            } else {
                console.log("Please enter a valid project description.");
                return false;
            }
            
        }
    },
    {
        type: "input",
        message: "Enter your email address:",
        name: "email"
    },
    {
        type: 'confirm',
        name: 'confirminstallation',
        message: 'Would you like to provide a step-by-step description of how to get the development environment running.?',
        default: true
      },
    {
        type: 'input',
        name: 'installation',
        message: "Provide a step-by-step description of how to get the development environment running.",
        when: ({confirminstallation}) => confirminstallation
        
    },
    {
        type: 'confirm',
        name: 'confirmuseage',
        message: 'Would you like to provide instructions and examples of your project in use for the Usage section.?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        when: ({confirmuseage}) => confirmuseage
    },
    {
        type: 'confirm',
        name: 'confirmcredits',
        message: 'Would you like to provide a list your collaborators?',
        default: true
    },
    {
        type: 'input',
        name: 'credits',
        message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
        when: ({confirmcredts}) => confirmcredts
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        
    }
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeToFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your READMe.md file has been successfully generated!")
    });
}

// TODO: Create a function to initialize app
function init() {
    const userResponse = inquirer.prompt(questions);
}

// Function call to initialize app
init();
