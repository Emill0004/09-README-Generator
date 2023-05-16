// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
badgeArray = [
"[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
];

['GNUAGPLv3', 'GNUGPLv3', 'GNULGPLv3', 'MozillaPublicLicense2.0', 
'ApacheLicense2.0', 'MITLicense', 'BoostSoftwareLicense1.0', 'TheUnlicense'];

function renderLicenseBadge(license) {
  if (license == 'GNUAGPLv3') {
    return badgeArray[0];
  } else if (license == 'GNUGPLv3') {
    return badgeArray[1];
  } else if (license == 'GNULGPLv3') {
    return badgeArray[2];
  } else if (license == 'MozillaPublicLicense2.0') {
    return badgeArray[3];
  } else if (license == 'ApacheLicense2.0') {
    return badgeArray[4];
  } else if (license == 'MITLicense') {
    return badgeArray[5];
  } else if (license == 'BoostSoftwareLicense1.0') {
    return badgeArray[6];
  } else if (license == 'TheUnlicense') {
    return badgeArray[7];
  } else {
    return "";
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  `
  +
  `${renderLicenseBadge(data.license)}
  
  `
  +
  `## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ` 
  +
  `## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This project is covered under the ${data.license} license.

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test_info}

  ## Questions
  GitHub: [${data.github}](https://github.com/${data.github})

  email: ${data.email} - Reach out to me at this email address with any additional questions!

`;
}

module.exports = generateMarkdown;
