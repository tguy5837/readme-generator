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
                    console.log('A title is required: ');
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
                    console.log('A description is required: ');
                    return false;
                };
            }
        },
        {
            type: 'checkbox',
            name: 'confirmSections',
            message: 'What sections would you like to include in your README?',
            choices: ['Installation', 'Usage', 'Contributing', 'Tests']

        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions/tips: ',
            when: ({ confirmSections }) => {
                if (confirmSections.includes('Installation')) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide some information on how to use your application: ',
            when: ({ confirmSections }) => {
                if (confirmSections.includes('Usage')) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmUsagePics',
            message: 'Would you like to provide any images?',
            default: true,
            when: ({ confirmSections }) => {
                if (confirmSections.includes('Usage')) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usagePics',
            message: 'Please provide the path or URL to your image: ',
            when: ({ confirmUsagePics }) => {
                if (confirmUsagePics) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Please enter some guidelines for contributors to keep in mind: ',
            when: ({ confirmSections }) => {
                if (confirmSections.includes('Contributing')) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Please enter some instructions for how to test certain features of your app: ',
            when: ({ confirmSections }) => {
                if (confirmSections.includes('Tests')) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a license to your README?',
            default: true
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please enter your license: ',
            choices: ['MIT', 'ISC'],
            when: ({ confirmLicense }) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTOC',
            message: 'Would you like to include a Table of Contents in your README?',
            default: false
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub username: ',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Must provide your GitHub username!');
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address: ',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Must provide your email!');
                    return false;
                };
            }
        }
    ]);
};

const dummyData = { title: 'Taylor', description: 'This is a description.', confirmSections: ['Installation-Instructions', 'Contribution-Guidelines', 'Test-Instructions'], confirmTOC: false, license: 'ISC' }

// generateMarkdown(dummyData);

// Function calls
promptUser()
    .then(readmeData => {
        const pageMd = generateMarkdown(readmeData);

        fs.writeFile('./generatedReadme/README.md', pageMd, err => {
            if (err) throw new Error(err);

            console.log('README finished! Checkout README.md to see the results and feel free to make any changes!')
        })
    });