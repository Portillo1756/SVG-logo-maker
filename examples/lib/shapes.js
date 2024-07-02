// write a class for shape
class Shape {
    constructor(){
        this.color = ""
        this.text = ""
    }

    setColor(color){this.color = color}
    setText(text){this.text = text}
}

class Circle extends Shape {
    render(){
        return`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

<circle cx="150" cy="100" r="80" fill="${this.color}"/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

</svg>`
    }
} 

class Square extends Shape {
    render(){
        return`<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>`
    }
}

class Triangle extends Shape {
    render() {
        return``
    }
}

console.log("shape"); 


// constructor arithmetic is exported from the file.
module.exports = shapes.test.js;






{/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

<circle cx="150" cy="100" r="80" fill="green"/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */}