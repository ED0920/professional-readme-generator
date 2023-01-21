const inquirer = require('inquirer');
const fs = require('fs');

inquirer.createPromptModule([
    {
        type:"input"
        message: ""
    }
])

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the title of the project?",
    },
    {
        type:"Input",
        name:"description",
        message:"Write a description of the project",
    },
    {
        type:"Input",
        name:"installation",
        message:"How do you install this application?",
    },
    {
        type:"input",
        name:"usage",
        message:"What does users need to know using this repo?",
    },
    {
        type:"input",
        name:"contribution",
        message:"What is the title of the project?",
    },
    {
        type:"input",
        name:"test",
        message:"What command should be run to run test?",
    },
    {
        type:"choice",
        name:"licence",
        message:"What kind of licence does your project have?",
        choices:["MIT", "APCHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type:"input",
        name:"username",
        message:"Please enter your github username."
    },
    {
        type:"input",
        name:"email",
        message:"Please enter in your email address.",
    },
];

// TODO: Create a function to write README file
function writeToFile(README.md, data) {}

// TODO: Create a function to initialize app
// use enquire to ask the questions
function init() {}

// Function call to initialize app
init();
