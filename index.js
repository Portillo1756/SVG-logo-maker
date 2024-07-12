const inquirer = require ('inquirer');
const path = require("path");
const {Circle, Square, Triangle} = require("./examples/lib/shapes");
const fs = require("fs/promises")
const SVG = require("./examples/lib/svg")


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
        let shape;
        if(res.shape== "circle") {
            shape = new Circle()
            const svg = new SVG()
            shape.setColor(res.color)
            svg.renderText(res.name, res.textColor)
            svg.setShape(shape)
            return fs.writeFile("logo.svg", svg.render())
        }
        else if(res.shape== "square") {
            shape = new Square()
            const svg = new SVG()
            shape.setColor(res.color)
            svg.renderText(res.name, res.textColor),
            svg.setShape(shape)
            return fs.writeFile("logo.svg", svg.render())
        }
        else if(res.shape== "triangle") {
            shape = new Triangle()
            const svg = new SVG()
            triangle.setColor(res.color)
            svg.renderText(res.name, res.textColor)
            svg.setShape(shape)
            return fs.writeFile("logo.svg", svg.render())
        }
    })
    .then(() => {console.log("complete")})

}

maker()

module.exports = maker
