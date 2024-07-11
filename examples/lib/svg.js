class SVG {
    constructor() {
        this.text = ""
        this.shapeElement = ""
    }
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement} ${this.text}</svg>`;
    }
    renderText(message){
        if (message.length > 3) {
            throw new Error("it should only be 3 character")
        }
        this.text = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}{message}</svg>`;
    }
    setShape(shape) {
        this.shapeElement= shape.render()
    }
}

module.exports = SVG