// variables.ts
let myString: string = "Hello, TypeScript!";
let myNumber: number = 42;
let myBoolean: boolean = true;
let myAny: any = "I can be anything";

console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Any:", myAny);

// Array of strings
let stringArray: (string|number)[] = ["Hello", "World", 9];
// Array of numbers
let numberArray: number[] = [1, 2, 3, 4, 5];

console.log("String Array:", stringArray);
console.log("Number Array:", numberArray);

function printMessage(message: string, count: number = 1): void {
    for (let i = 0; i < count; i++) {
        console.log(message);
    }
}

printMessage("Hello, World!");
printMessage("TypeScript is awesome!", 3);
