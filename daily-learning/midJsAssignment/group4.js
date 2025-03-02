// Group 4 – Loops & Error Handling
// Subjective Questions:
// Explain the difference between a for loop and a while loop with examples.
// What is a try...catch block used for in JavaScript?
// Describe the use of the finally block in error handling.
// Coding Questions:
// Write a for loop that prints numbers from 100 to 90 in descending order.
// Create a function findSquare() that accepts a number and uses a try...catch block to catch errors if the input is not a number.

// const findSquare = (num) => {
//  // Your code here
// };

// Use a while loop to print numbers from 1 to 10.

// ANSWERS:
// 1. Difference between for loop and while loop with Examples:

// For Loop: Used when you know how many times the loop should run.
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
// Thi loop will print the number from 1-5

// While Loop: Used when the number of iterations is unknown, and it continues until the condition becomes false.
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
// Thi loop will print the numbers 1-5

// 2. What is a try...catch block used for in JavaScript?

// A try...catch block is used to handle runtime errors without breaking the program.
try {
    let num = 10 / 0;
    console.log(num);
  } catch (error) {
    console.log(`Error occurred:`, error);
  }
  

//   3. Describe the use of the finally block in Error Handling:
// The finally block always executes whether there is an error or not.
try {
    // Code that might throw an error
  } catch (error) {
    console.log(`Error occurred`);
  } finally {
    console.log(`This will always execute`);
  }
//   The finally block is mostly used to close resources like files or database connections.

// Coding Questions
// 1. For Loop Printing Numbers from 100 to 90 (Descending Order)
for (let i = 100; i >= 90; i--) {
    console.log(i);
  }

  
//   2. Create a function findSquare() that accepts a number and use a try...catch block to catch errors. if the input is not a number.
const findSquare = (num) => {
    try {
      if (isNaN(num)) {
        throw `Input is not a number!`;
      }
      console.log(num * num);
    } catch (error) {
      console.log(`Error:`, error);
    }
  };
  
  findSquare(5);    // 25
  findSquare(Hello);  // Error: Input is not a number!
  
//   Use a while loop to print the numbers from 1 to 10.
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
// Output: