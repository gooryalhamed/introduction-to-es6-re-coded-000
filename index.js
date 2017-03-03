const greet = (greeting, person) => {
  return greeting + ', ' + person + '!';
};
 
// 'Hello, Marv'
greet('Hello', 'Marv');
 
var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryl­lium'
];
 
// compare this implementation...
var a2 = a.map(function(s){ return s.length });
 
// ... to this implementation with the fat arrow
var a3 = a.map(s => s.length);
///////////////////////////////////////////////////////////////////// promise 

const promise = new Promise((resolve, reject) => {
  return someIntenseTask().then(result => {
    if (result.success) {
      return resolve(result)
    }
 
    return reject(result.error)
  })
})
 
promise.then(result => {
  return doSomething(result);
}).catch(error => handleError(error))

//////////////////////////////////////////////// classes 
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
 
  // whaaaaat -- getters!
  get area() {
    return this.calcArea();
  }
 
  calcArea() {
    return this.height * this.width;
  }
}
 
const rectangle = new Polygon(10, 5);
 
console.log(rectangle.area);
/////////////////////////////////////////////// extend classes and use super
class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength)
  }
}
 
const mySquare = new Square(5);
 
// Square { height: 5, width: 5 }
mySquare;
 
// [Function: Square]
mySquare.constructor;
 
// 25
mySquare.area;


///////////////////////////////////////OBJECT LITERAL EXTENSIONS

//ES6 gives us a number of handy new ways to deal with objects.
const prop = function() {
  return "I'm a prop!";
}
 
const myObj = {
  // computed (dynamic) property names
 
 
  // methods
  shout() {
    return 'AH!'
  },
 
  // short for `prop: prop`
  prop
}
 
// 'something'
myObj.foobar
 
// "I'm a prop!"
myObj.prop()
 
// 'AH!'
myObj.shout()

/////////////////////////////////////// SPREAD OPERATOR

//The spread operator — ... — is unassuming but incredibly powerful.
//We can use it for arrays:
const a = [1, 2, 3]
const b = [0, ...a, 4, 5]
 
// [0, 1, 2, 3, 4, 5]
b
///////////////////////////functions:
function printArgs() {
  // recall that every function gets an `arguments`
  // object
  console.log(arguments);
}
 
// using `a` from above
// [1, 2, 3]
printArgs(...a);

/////////////////////////////////////////// Template strings
var foo = 'bar';
var sentence = 'I went to the ' + foo + ' after working in ES5 for too long.';
//alternatively ,we can now write:
var foo = 'bar';
var sentence = `I went to the ${foo} after working in ES5 for too long.`;



/////////////////////////////////////////////////////////// DESTRUCTURING
const [a, b] = [1, 2];
// a === 1 && b === 2
 
const { a, b } = { a: 1, b: 2 }
// a === 1 && b === 2