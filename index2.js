const inquirer = require('inquirer');
const fs = require('fs');
const gmd = require('./utils/generateMarkdown.js');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter project title.',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter project description',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter installation instructions.',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Enter usage information.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter contribution guidelines.',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'Enter test instructions.',
            name: 'test_info',
        },
        {
            type: 'list',
            message: 'Choose a license.',
            choices: ['GNUAGPLv3', 'GNUGPLv3', 'GNULGPLv3', 'MozillaPublicLicense2.0', 'ApacheLicense2.0', 'MITLicense', 'BoostSoftwareLicense1.0', 'TheUnlicense'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Enter GitHub username.',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Enter email address.',
            name: 'email',
        },
    ])
    .then((data) => {
        fs.writeFile('newREADME.md', gmd(data), (err) => 
        err ? console.log(err) : console.log('Generated newREADME.md'));
    });

    // gmd(data) returns the markdown written in generateMarkdown.js with template literals

    // TODO: 
    // License
    // Comments
    // Readme
