// The following two arrays store the markdown for the license badge and the links to each license.
const badgeArray = [
"[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
];

const linkArray = [
  "https://www.gnu.org/licenses/agpl-3.0",
  "https://www.gnu.org/licenses/gpl-3.0",
  "https://www.gnu.org/licenses/lgpl-3.0",
  "https://opensource.org/licenses/MPL-2.0",
  "https://opensource.org/licenses/Apache-2.0",
  "https://opensource.org/licenses/MIT",
  "https://www.boost.org/LICENSE_1_0.txt",
  "http://unlicense.org/"
];

// This function uses if statements to determine which license badge to return.
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
  } else if (license == 'None') {
    return "";
  };
};

// This function uses if statements to determine which link is returned.
function renderLicenseLink(license) {
  if (license == 'GNUAGPLv3') {
    return linkArray[0];
  } else if (license == 'GNUGPLv3') {
    return linkArray[1];
  } else if (license == 'GNULGPLv3') {
    return linkArray[2];
  } else if (license == 'MozillaPublicLicense2.0') {
    return linkArray[3];
  } else if (license == 'ApacheLicense2.0') {
    return linkArray[4];
  } else if (license == 'MITLicense') {
    return linkArray[5];
  } else if (license == 'BoostSoftwareLicense1.0') {
    return linkArray[6];
  } else if (license == 'TheUnlicense') {
    return linkArray[7];
  } else if (license == 'None') {
    return "";
  };
}

// This function returns markdown for the license section of the README if the parameter license isn't 'None'.
function renderLicenseSection(license) {
  if (license == 'None') {
    return ``;
  } else {
    return `## License
  This project is covered under the  [${license}](${renderLicenseLink(license)}) license.
  `;
  };
};

// This function returns markdown for the README based on user input.
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

  `
  +
  ` ${renderLicenseSection(data.license)}
  
  `
  +
  `## Contributing
  ${data.contribute}

  ## Tests
  ${data.test_info}

  ## Questions
  GitHub: [${data.github}](https://github.com/${data.github})

  email: ${data.email} - Reach out to me at this email address with any additional questions!

`;
}

// Exports the generateMarkdown function.
module.exports = generateMarkdown;
