// write a class for shape
class Shape {
    constructor(){
        this.color = ""
    }

    setColor(color){
        this.color = color}
}

class Circle extends Shape {
    render(){
        return`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.color}"/>
    </svg>`
    }
} 

class Square extends Shape {
    render(){
        return`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            <rect x="150" y="150" width="150" height="150" fill="${this.color}"/>
        </svg>`
    }
}

class Triangle extends Shape {
    render() {
        return`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            <polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180 fill="${this.color}"/>
        </svg>`
    }
}

console.log("shape"); 


// constructor arithmetic is exported from the file.
module.exports = {Circle, Square, Triangle};



/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

<circle cx="150" cy="100" r="80" fill="green"/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */