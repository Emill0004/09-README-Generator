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
            choices: ['test1', 'test2', 'test3'],
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
        console.log(data);
    });

    //how to do this without classes