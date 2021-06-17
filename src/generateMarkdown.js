// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return '';
  }

  return `![badge](https://img.shields.io/badge/license-${userInput.license}-blue?style=flat-square)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (!license){
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (!license){
    return '';
  }
  return`
  ${renderLicenseBadge}
  <br />
  This application is covered under the terms of the ${userInput.license} license.
  `;
};

// TODO: Create a function to generate markdown for README



function generateMarkdown(userInput) {
  return `
  
  # ${userInput.title}

  ${renderLicenseBadge}<br />

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)
  
  ## Description
  ${userInput.description}
  
  ## Installation
  ${userInput.installation}
  
  ## Usage
  ${userInput.usage}
  
  ## License
  ${userInput.license}
 
  ## Contributing
  ${userInput.credits}

  ## Tests
  ${userInput.tests}

  ## Questions
  ${userInput.questions}
  <br />

  Find me on GitHub: [${userInput.github}](https://github.com/${userInput.github})<br />
  <br />
  Email questions to: ${userInput.email}<br />

  

`;
}

module.exports = generateMarkdown;
