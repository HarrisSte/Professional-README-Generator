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
  contributors,
  tests,
  github,
  email,
  instructions,
}) {
  return `# ${data.title}

## Description ${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Contributors](#contributors)

## Installation
Packages that are required to successfully run this program are: ${data.installation}

## Usage
Ways in which this program and be used are: 

## License
The license for this program is: ${data.license}

## Contributors
Those who helped develop this program are: ${data.contributors}

## Contact
\n![Badge]($888888888)
\n![Profile Picture](${profilePic})
\n!

`;
}

module.exports = generateMarkdown;
