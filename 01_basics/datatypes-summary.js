// Primitive

// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')

// console.log(id === anotherId);

// const bigNumber = 55678787627382n



// Reference (Non primitive)

// Array, objects, functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "chandan",
    age: 20,
}

const myfunction = function(){
    console.log("Hello World"); 
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
