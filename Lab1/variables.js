// variables.ts
var myString = "Hello, TypeScript!";
var myNumber = 42;
var myBoolean = true;
var myAny = "I can be anything";
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Any:", myAny);
// Array of strings
var stringArray = ["Hello", "World"];
// Array of numbers
var numberArray = [1, 2, 3, 4, 5];
console.log("String Array:", stringArray);
console.log("Number Array:", numberArray);
function printMessage(message, count) {
    if (count === void 0) { count = 1; }
    for (var i = 0; i < count; i++) {
        console.log(message);
    }
}
printMessage("Hello, World!");
printMessage("TypeScript is awesome!", 3);
