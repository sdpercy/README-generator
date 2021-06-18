// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(userInput) 
{
  const selectedLicense = userInput.license;
  let licensebadge = ''
  if (selectedLicense === 'No license'){
    licensebadge = "No license";
  };
  if (selectedLicense === 'GNU GPLv3'){
  licensebadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  };
  if (selectedLicense === 'GNU LGPLv3'){
    licensebadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
  };
  if (selectedLicense === 'Mozilla Public License 2.0'){
    licensebadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  };
  if (selectedLicense === 'Apache License 2.0'){
    licensebadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  };
  if (selectedLicense === 'MIT License'){
    licensebadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  };
  if (selectedLicense === 'Boost Software License 1.0'){
    licensebadge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  };
  return licensebadge
};

// TODO: Create a function to generate markdown for README

function generateMarkdown(userInput) {
  return `
  
  # ${userInput.title}

  ${renderLicenseBadge(userInput)}

  <br />

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
  For more information about the License click on the badge below!<br />
  <br />
  ${renderLicenseBadge(userInput)}
  
 
  ## Contributing
  ${userInput.credits}

  ## Tests
  ${userInput.tests}

  ## Questions

  Find me on GitHub: [${userInput.github}](https://github.com/${userInput.github})<br />
  <br />
  Email questions to: ${userInput.email}<br />`
}

module.exports = generateMarkdown;
