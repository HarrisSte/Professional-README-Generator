// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  description,
  installation,
  usage,
  license,
  contributions,
  tests,
  github,
  email,
}) {
  return `# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Contact](#contact)

## Installation
Packages that are required to successfully run this program are: ${installation}

## Usage
Ways in which this program can be used: ${usage}

## License
The license for this program is: ${license}

## Contributors
Those who helped develop this program are: ${contributions}

## Tests
Commands needed to run tests: ${tests}

## Contact
GitHub: ${github}
<br>
Email: ${email}
`;
}

module.exports = generateMarkdown;
