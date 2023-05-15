//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions for users to input
// const questions = [];
inquirer
  .prompt([
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
      name: "License",
      message: "What kind of license do you have for this project?",
      choices: ["MIT", "Apache", "GPL", "None"],
    },
    {
      type: "input",
      name: "contributions",
      message: "",
    },
    {
      type: "input",
      name: "tests",
      message: "",
    },
    {
      type: "input",
      name: "questions",
      message: "Should someone have questions, what is your email address?",
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

// TODO: Create a function to write README file
//Function that writes README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
      throw err;
    }
    console.log("Congratulations! Your README is written and compeleted!");
  });
}

// TODO: Create a function to initialize app
//Function that initializes the app
function init() {}

// Function call to initialize app
init();
