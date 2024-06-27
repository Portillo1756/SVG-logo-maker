

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
        type: "checkbox",
        name: "shape",
        message: "Select a shape for the logo",
        choices: ["circle", "square", "triangle"],
    },

    {
        type: "input",
        name: "shape color",
        message: "Enter a shape color",
    },
]