const inquirer = require('inquirer');
const path = require("path");


// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter text for the logo. (Must not be more than 3 characters.)",
    },

    {
        type: "input",
        name: "color",
        message:"Enter a text color.",
    },

    {
        type: "list",
        name: "shape",
        message: "Select a shape for the logo",
        choices: ["circle", "square", "triangle"],
    },

    {
        type: "input",
        name: "shapeColor",
        message: "Enter a shape color",
    },
]

// TODO: Create a function to initialize app
function maker() {
    inquirer.prompt(questions).then( (res) => {console.log(res.name)})
}

maker()