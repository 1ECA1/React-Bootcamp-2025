// 1. what is the difference between Math.round(), Math.ceil() and Math.floor()?

// solution:

// Math.round() - returns the value of a number rounded to the nearest integer.
// Math.ceil() - returns the smallest integer greater than or equal to a given number.
// Math.floor() - returns the largest integer less than or equal to a given number.

//2. What will Math.round(2.5) return? Why?

// solution:

// Math.round(2.5) will return 3 because the number is greater than 2.5, so it will round up to the nearest integer.

//3. How does Math.ceil() behave when the number is negative? Provide an example.

// solution:

// Math.ceil() behaves differently when the number is negative, it will return the smallest integer greater than or equal to a given number.
// Example:
console.log(Math.ceil(-2.5)); // -2
console.log(Math.ceil(-2.1)); // -2


// Task 1:
// 	•	Write an arrow function named compareRoundingMethods(number) that takes a decimal number as input.
// 	•	Inside the function, use Math.round(), Math.ceil(), and Math.floor() on the input number.
// 	•	Return the results in an object format like this:

// {
//   rounded: 4,
//   ceil: 5,
//   floor: 4
// }

// solution:

const compareRoundingMethods = (number) => {
    return {
        rounded: Math.round(number),
        ceil: Math.ceil(number),
        floor: Math.floor(number)
    }
}
const result = compareRoundingMethods(4.5);
console.log(result);

// Create a program that generates 10 random decimal numbers between 1 and 100.

// solution:

const randomNumbers = () => {
    for (let i = 0; i < 10; i++) {
        console.log(Math.random() * 100);
    }
}
randomNumbers();


 // Write a function calculateTotal(items) that takes an array of item prices (decimal numbers).
// 	•	Use:
// 	•	Math.round() to calculate the total rounded to the nearest integer.
// 	•	Math.ceil() to calculate the total rounded up.
// 	•	Math.floor() to calculate the total rounded down.
// 	•	Return an object with the three totals.

// solution:

const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item, 0);
    return {
        rounded: Math.round(total),
        ceil: Math.ceil(total),
        floor: Math.floor(total)
    }
}
const items = [2.5, 3.5, 4.5];
const total = calculateTotal(items);
console.log(total);

// Write a program that takes any positive or negative decimal number and determines whether Math.ceil() and Math.floor() return the same result for that number. Print a message indicating the result.
// Hint: For some negative numbers, Math.ceil() and Math.floor() behave differently.

// solution:

const checkCeilAndFloor = (number) => {
    if (Math.ceil(number) === Math.floor(number)) {
        console.log(`Math.ceil() and Math.floor() return the same result for ${number}`);
    } else {
        console.log(`Math.ceil() and Math.floor() return different results for ${number}`);
    }
}
checkCeilAndFloor(5);
checkCeilAndFloor(-2.5);
checkCeilAndFloor(3.0);
checkCeilAndFloor(-2.1);

