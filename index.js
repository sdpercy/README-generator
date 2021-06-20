// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMarkdown = require('./src/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile);

// Array of questions for user input
const questions = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a description of your project.",
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username!',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is the name of your GitHub repository?',
            default: 'readme-generator',
        },
        {
            type: "input",
            message: "Enter your email address:",
            name: "email"
        },
        {
            type: 'input',
            name: 'installation',
            message: "Provide a step-by-step description of how to get the development environment running.",
            default: 'Information to be provide in the future.'   
        },
        {
            type: 'input',
            name: 'usage',
            message: "Provide instructions and examples of your project in use for the Usage section.",
            default: 'Instructions to be provide in the future.'
        },
        {
            type: 'input',
            name: 'credits',
            message: "List your collaborators, if any, with links to their GitHub profiles.",
        },
        {
            type: "input",
            name: "tests",
            message: "Enter Test Instructions",
            default: 'Instructions to be provide in the future.'
        },  
        {
            type: 'list',
            name: 'license',
            message: "Choose a license for your project.",
            choices: ['No license', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0'],
        }
    ]);
}

// function to initialize app
async function init() {
    try {
        //gets the responses
        const userInput = await questions();
        //pass the data from inquirer prompt to the markdown file
        const markdownFileInput = generateMarkdown(userInput);

        await writeFileAsync('./dist/generated-README.md', markdownFileInput);
        console.log('"Your READMe.md file has been successfully generated!"');
    }catch(err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
