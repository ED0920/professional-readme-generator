// import inqurier into our file
const inquirer = require("inquirer");
const generateBadge = require("./utils/generateMarkdown");

const fs = require("fs");

// array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "Input",
    message: "Write a description of the project",
    name: "description",
  },
  {
    type: "Input",
    message: "What command should be run to install dependencies?",
    name: "installation",
  },
  {
    type: "input",
    message: "What does users need to know using this repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What command should be run to run test?",
    name: "test",
  },
  {
    type: "list",
    message: "What kind of licence does your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    name: "licence",
  },
  {
    type: "input",
    message: "Add contributing guidelines",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please enter your github username.",
    name: "username",
  },
  {
    type: "input",
    message: "Please enter in your email address.",
    name: "email",
  },
];

//prompt to generate ReadMe file, ReadMe file Layout
inquirer.prompt(questions).then((response) => {
  const {
    title,
    description,
    installation,
    usage,
    contributing,
    test,
    licence,
    username,
    email,
  } = response;

  const badgeLink = generateBadge(licence);
  const readMe = `
# ${title}

${badgeLink}

## Description
${description}

## Table of contents

[Installation](#installation)

[Usage](#usage)

[Licence](#licence)

[Contributing](#contributing)

[Test](#test)

[Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Licence
${licence}

## Contributing
${contributing}

## Test
${test}

## Questions
If you have any questions please reach me on [GitHub](https://github.com/${username}) or contact me via my email ${email}.
`;

  writeToFile(title, readMe);
});

function writeToFile(filename, data) {
  fs.writeFileSync(`${filename}.md`, data);
}
