const inquirer = require ('inquirer');
const path = require("path");
const {Circle, Square, Triangle} = require("./examples/lib/shapes");
const fs = require("fs/promises")
const svg = require("./examples/lib/svg")


// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter text for the logo. (Must not be more than 3 characters.)",
    },

    {
        type: "list",
        name: "shape",
        message: "Select a shape for the logo",
        choices: ["circle", "square", "triangle"],
    },

    {
        type: "input",
        name: "color",
        message: "Enter a shape color",
    },
]

// TODO: Create a function to initialize app
function maker() {
    inquirer.prompt(questions).then( (res) => {
        if(res.shape== "circle") {
            const circle = new Circle()
            // circle.setColor(res.color)
            svg.renderText(res.name)
            svg.setShape(shape)
            console.log(circle)
            console.log(circle.render())
            return fs.writeFile("logo.svg", circle.render())
        }
        else if(res.shape== "square") {
            const square = new Square()
            // square.setColor(res.color)
            svg.renderText(res.name)
            svg.setShape(shape)
            console.log(square)
            console.log(square.render())
            return fs.writeFile("logo.svg", square.render())
        }
        else if(res.shape== "triangle") {
            const triangle = new Triangle()
            // triangle.setColor(res.color)
            svg.renderText(res.name)
            svg.setShape(shape)
            console.log(triangle)
            console.log(triangle.render())
            return fs.writeFile("logo.svg", triangle.render())
        }
    })
    .then(() => {console.log("complete")})

}

maker()

module.exports = maker
