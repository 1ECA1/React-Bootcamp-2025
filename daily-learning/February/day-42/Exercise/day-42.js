// JavaScript Errors and Error Handling

// Types of Errors in JavaScript

// 1. Syntax Errors (SyntaxError)
// Syntax errors occur when the JavaScript engine encounters code that violates the language syntax rules.

// Example
const name = `Hectro`
// console.log(`Hello`  name) // Incorrect
console.log(`Hello ${name}`) // Corrected


// 2. Reference Errors (ReferenceError)
// A reference error occurs when trying to access a variable that has not been declared.

// Example
// const myVar = myVar
// console.log(myVar)


// 3. Type Errors (TypeError)
// Type errors occur when a value is used in an inappropriate way.

// Example
const thisNum = 20
// console.log(thisNum.toUpperCase()) // Incorrect

// const woman = `victoria`;
console.log(woman.toUpperCase()) // Corrected

const array = [20, 63, 23, 49]
// console.log(array.toUpperCase())


// 4. Range Errors (RangeError)
// A range error occurs when a value is out of an allowable range, such as an invalid array length.

// Example
// eval("console.log('Hello)"); // Incorrect


// Error Handling in JavaScript
// To handle errors effectively, JavaScript provides the try...catch...finally and throw statements.


// 1. try...catch Block
// The try block runs a piece of code, and if an error occurs, the catch block executes.

// Example
const newVariable = `Amazing`;
try{
    // console.log(newVariable)
}catch (error){
    // console.log(`Oops!!`, error.message)
};

// console.log(newVariable)


// 2. throw Statement
// You can manually generate errors using the throw keyword.

// Example
const gender = `Male`
if (!gender == `Male` || `Female`){
    // throw new Error(`You must be either a male or female`)
}



const valPackage = (hasPartner) =>{
    if (!hasPartner){
        throw new Error(`Sorry, you don't have a Val Package`)
    }
    return `Send Your Account for 2 million`
}

try{
    // console.log(valPackage(false));
}catch (error){
    console.log(error.message)
}


// 3. finally Block
// The finally block always runs after try and catch, regardless of whether an error occurred.

// Example
const beta = 34;
try{
    console.log(beta)
}catch (error){
    throw error.message
}finally{
    console.log(`All Done`)
}


// Class Work
// Task 1: Identifying Errors
// What type of error will each of the following produce?
// 1.	console.log(undefinedVariable);----- Reference Error
// 2.	"Hello".pop();------ Type Error
// 3.	const obj = {}; console.log(obj.name.age);----Type Error
// 4.	new Array(-1);---- Range error
// 5.	eval("console.log(Hello)");----reference error

// Class Work
// Task 1: Identifying Errors
// What type of error will each of the following produce?
// 1.	console.log(undefinedVariable);----- Reference Error
// 2.	"Hello".pop();------ Type Error
// 3.	const obj = {}; console.log(obj.name.age);----Type Error
// 4.	new Array(-1);---- Range error
// 5.	eval("console.log(Hello)");----reference error


// 1. console.log(undefinedVariable); → ReferenceError
// This occurs because undefinedVariable has not been declared.

// 2. "Hello".pop(); → TypeError
// Strings are immutable and do not have a .pop() method 

// 3. const obj = {}; console.log(obj.name.age); → TypeError
// This produces a TypeError because obj.name is undefined, and trying to access .age on undefined is not allowed.

// 4. new Array(-1); → RangeErro
// This happens because array lengths must be 0 or positive integers, and -1 is not valid.

// 5. eval("console.log(Hello)"); → ReferenceError
// Hello is not defined, so eval() tries to interpret it as a variable, causing a ReferenceError.





// Task 2: Implementing Try-Catch
// Write a program that:
// •	Asks the user to enter a number.
// •	Throws an error if the input is not a valid number.
// •	Catches the error and displays an appropriate message.

const userInput = prompt(`Enter a number`);
try{
    if (isNaN(userInput)){
        throw new Error(`Invalid Input`)
    }
    console.log(`You entered ${userInput}`)
}
catch (error){
    console.log(error.message)
}
