"use strict";
// variables.ts
let myString = "Hello, TypeScript!";
let myNumber = 42;
let myBoolean = true;
let myAny = "I can be anything";
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Any:", myAny);
// Array of strings
let stringArray = ["Hello", "World"];
// Array of numbers
let numberArray = [1, 2, 3, 4, 5];
console.log("String Array:", stringArray);
console.log("Number Array:", numberArray);
function printMessage(message, count = 1) {
    for (let i = 0; i < count; i++) {
        console.log(message);
    }
}
printMessage("Hello, World!");
printMessage("TypeScript is awesome!", 3);
