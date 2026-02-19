// Primitive
// 7 types of primitive:
//  String, Number, Boolean, null(empty), undefined(value not decided yet), Symbol(to make any value unique), BigInt

//  JAVASCRIPT is a dynamically typed language, not a statically typed.
// This means that variable types are determuned at runtime based on the value assigned to them, and we do not need to explicitly declare the data type of a variable in the code

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;   //n undefined
let userEmail1 = undefined         // also undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);     // false -> because symbol is work in a way even we pass same value in it it give different ans

const bigNumber = 3642428747626767786597n    // initially it is very large to evaluate so write "n" after number to make it BigInt



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]     // array

{
    name: "pranshu",    // object -> declared under curly braces { }
    age; 20,            // can also be stored in variable like let myObj = { }
}

const myFunction = function(){      // can also be stored in variables
    console.log("Hello World");
}

console.log(typeof bigNumber);     // undefined
console.log(typeof id);            // symbol
console.log(typeof score);         // number
console.log(typeof isLoggedIn);    // boolean
console.log(typeof outsideTemp);   // object
console.log(typeof scorevalue);    // number
console.log(typeof userEmail1);    // undefined
console.log(typeof anotherId);     // symbol
console.log(typeof heros);         // object
console.log(typeof myFunction);    // function

//  datatype of non primitive is normally object bit of function it is function object