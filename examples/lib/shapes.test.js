const {Triangle, Circle, Square} = require('./shapes.js');
const {Triangle, Circle, Square} = require('./logo.svg');

// TODO: CREATED MY TEST
// const shape = new Circle();
// shape.setColor("red");
// expect(shape.render()).toEqual('circle cx="25" cy="75" r="20"/>');

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polugon points="150, 18 244, 182 56, 182" fill="blue" />');

describe("circle", () => {
    test ("this should be a red circle svg", () => {
       const expect = '<circle cx="150" cy="100" r="80" fill="red"/>'
       const circle = new Circle()
       circle.setColor("red")
       const svg = circle.render()
       expect(svg).toEqual(expect);  
    })
})

describe("triangle",() => {
    test ("this should be a triangle svg", () => {
       const expect = '<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180 fill="${this.color}"/>'
       const triangle = new Triangle()
       triangle.setColor("red")
       const svg = triangle.render()
       expect(svg).toEqual(expect);  
    })
})