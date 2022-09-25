// Return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-green)`
  } else {
    return ''
  }
};

// Return the license section of README
function renderLicenseSection(license) {
  if (license) {
    if (license === 'MIT') {
      return `MIT License
      
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
      
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
      
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    } else if (license === 'ISC') {
      return `ISC License
      
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
      
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.`
    }
  } else {
    return ''
  }
};

// Return Table of Contents Title if confirmed
function renderTocTitle(confirmTOC) {
  if (confirmTOC) {
    return `## Table of Contents`
  } else {
    return ''
  }
};

// Return Table of Contents if confirmed
function renderToc(templateData) {
  let sectionMarkdown = ``;
  for (let i = 0; i < templateData.confirmSections.length; i++) {
    sectionMarkdown = sectionMarkdown + (`* [${templateData.confirmSections[i]}](#${templateData.confirmSections[i]})
`)
  };
  if (templateData.confirmTOC) {
    return `${sectionMarkdown}`
  } else {
    return ''
  }
};

// Return installation section
function renderInstallSection(installationInstructs) {
  if (installationInstructs) {
    return `## Installation
    
${installationInstructs}`
  } else {
    return ''
  }
};

// Return usage section
function renderUsageSection(usageInfo) {
  if (usageInfo) {
    return `## Usage
    
${usageInfo}`
  } else {
    return ''
  }
};

// Return usage pics
function renderUsagePics(picture) {
  if (picture) {
    return `!(${picture})`
  } else {
    return ''
  }
};

// Return contribution section
function renderContributingSection(guidelines) {
  if (guidelines) {
    return `## Contributing
    
${guidelines}`
  } else {
    return ''
  }
};

// return test section
function renderTestSection(instructions) {
  if (instructions) {
    return `## Tests
    
${instructions}`
  } else {
    return ''
  }
};

// return questions section
function renderQuestionSection(github, email) {
  return `## Questions
    
### How to reach me:

GitHub: [${github}](https://github.com/${github})

Email: [${email}](mailto:${email})`
};

// Format and begin creating README
module.exports = templateData => {

  console.log(templateData)

  return `# ${templateData.title}
${renderLicenseBadge(templateData.license)}

${renderLicenseSection(templateData.license)}

## Description

${templateData.description}

${renderTocTitle(templateData.confirmTOC)}
${renderToc(templateData)}

${renderInstallSection(templateData.installation)}

${renderUsageSection(templateData.usage)}

${renderUsagePics(templateData.usagePics)}

${renderContributingSection(templateData.contributionGuidelines)}

${renderTestSection(templateData.testInstructions)}

${renderQuestionSection(templateData.github, templateData.email)}

`;

};
