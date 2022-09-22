// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your README? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your README.');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please add a detailed description of the project here: ',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your README.');
                    return false;
                };
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// Function calls
promptUser()
    .then(readmeData => {
        generateMarkdown(readmeData);
    })