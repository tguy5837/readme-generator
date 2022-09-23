// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-green)`
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    if (license === 'MIT') {
      return `MIT License here!`
    } else if (license === 'ISC') {
      return `ISC License here!`
    }
  } else {
    return '';
  }
};

function renderToC(templateData) {
  if (templateData.confirmTOC) {
    templateData.confirmSections.forEach(() => {
      return `* [${templateData.confirmSections}](#${templateData.confirmSections})`
    })
  }
}

// TODO: Create a function to generate markdown for README
// Create sections
function renderInstallSection(installationInstructs) {
  if (installationInstructs) {
    return `### Installation Instructions
    
${installationInstructs}`
  } else {
    return '';
  }
};

module.exports = templateData => {

  console.log(templateData)

  return `# ${templateData.title}
${renderLicenseBadge(templateData.license)}

${renderLicenseSection(templateData.license)}

### Description

${templateData.description}

${renderToC(templateData)}

${renderInstallSection(templateData.installation)}
      `;

};
