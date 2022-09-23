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
            choices: ['Installation Instructions', 'Usage Information', 'Contribution Guidelines', 'Test Instructions']

        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions/tips: ',
            when: ({ confirmSections }) => {
                if (confirmSections.includes('Installation Instructions')) {
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
                if (confirmSections.includes('Usage Information')) {
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
                if (confirmSections.includes('Usage Information')) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'pictureUrl',
            message: 'Please provide the path to your image starting with "./": ',
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
                if (confirmSections.includes('Contribution Guidelines')) {
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
                if (confirmSections.includes('Test Instructions')) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a license badge to your README?',
            default: true
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please enter your license: ',
            when: ({ confirmLicense }) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

const promptUserData = readmeData => {
    readmeData.userData = [];

    return inquirer.prompt([
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
    ]).then(userDataInput => {
        readmeData.userData.push(userDataInput);
        return readmeData;
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// Function calls
promptUser()
    .then(promptUserData)
    .then(readmeData => {
        const pageMd = generateMarkdown(readmeData);

        fs.writeFile('./README.md', pageMd, err => {
            if (err) throw new Error(err);

            console.log('README finished! Checkout README.md in "generated-readme" to see yours!')
        })
    });