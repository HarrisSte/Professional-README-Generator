//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for users to enter responses that will display on the README file.
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is required for installation?",
  },
  {
    type: "input",
    name: "usage",
    message: "In what ways can your project be used?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license do you have for this project?",
    choices: ["MIT", "Apache", "GPL", "None"],
  },
  {
    type: "input",
    name: "contributions",
    message: "Who are the contributors to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What commands are needed to run tests?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
];

//Function that writes README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
      throw err;
    }
    console.log("Huzzah! Your README is ready for you to check out!");
  });
}

//Function that initializes the app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile("README.md", markdown);
    })
    .catch((err) => {
      console.log(err);
    });
}

//Function call to initialize app
init();
