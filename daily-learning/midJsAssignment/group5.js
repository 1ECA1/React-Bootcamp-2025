// Subjective Questions:
// Purpose of Math.random() in JavaScript
// Math.random() is used to generate a random floating-point number between 0 (inclusive) and 1 (exclusive).
// It is commonly used for generating random numbers in games, simulations, and cryptographic applications when combined with other mathematical operations.

//2. Exporting and Importing Functions Between JavaScript Files

// Exporting: Use the export keyword in the file where the function is defined.
// javascript
export function greet(name) {
    return `Hello, ${name}!`;
}


// Importing: Use the import statement in the file where the function is needed.
import { greet } from './greet.js';
console.log(greet('Alex'));

//3 Difference Between Named Exports and Default Exports

// Named Exports: Allows multiple exports from a file using specific names. Importing requires curly braces {}.
// javascript
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}

// iporting
import { add, subtract } from './math.js';

// Default Exports: Allows only one export per file, imported without curly braces.
export default function multiply(a, b) {
    return a * b;
}

// importing
import multiply from './math.js';


// Coding Questions:
//1 Generate a random number between 1 and 100 and log it to the console.
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

//2 Create mathUtils.js, export addNumbers(), import and use it in another file.
// mathUtils.js (Exporting the function)
export function addNumbers(a, b) {
    return a + b;
}

// main.js (Importing and using the function)
import { addNumbers } from './mathUtils.js';
console.log(addNumbers(5, 10)); // Output: 15


// 3. Use Math.max() to find the largest number in the array [23, 45, 67, 89, 12].
let numbers = [23, 45, 67, 89, 12];
let maxNumber = Math.max(...numbers);
console.log(maxNumber); // Output: 89
