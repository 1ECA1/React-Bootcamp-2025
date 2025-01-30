//Create an object called targetOne, targetTwo, targetThree.
// Each object should have a different key and value pairs, 
// using the object.assign method, assign the three above object to a new object called source.
// solution:

const target1 = {
    myName: `ALexone`,
    age: 25

}

const target2 = {
    profession: `Engineer`,
    country: `Nigeria`,
    state: `delta`,
}

const target3 = {
    hubby: `Coding`,
    language: `JavaScript`,
}

const source = Object.assign({},target1, target2, target3);
console.log(source);

// // Create a frozen object called subZero using the Object.freeze method, add a new property to the object

const subZero = Object.freeze({
    jaykay: `center midfielder`,
    ismail: `center forward`,
    teslim: `defender`
}
);

subZero.jordan = `forward`;

console.log(subZero); 

// Create a sealed object called lockDown using the Object.seal method, 
// delete an existing property, add a new property and then modify an existing property.

const lockDown = Object.seal({
    jaykay: `center midfielder`,
    ismail: `center forward`,
    teslim: `defender`
}
);

delete lockDown.jaykay;
lockDown.jordan = `forward`;
lockDown.ismail = `winger`;

console.log(lockDown);

// Create 5 objects and use the spread operator to merge all the 5 objects to an object called merge

const obj1 = {
    myName: `ALexone`,
    age: 25
}

const obj2 = {
    profession: `Engineer`,
    country: `Nigeria`,
}

const obj3 = {
    hubby: `Coding`,
    language: `JavaScript`,
}

const obj4 = {
    ismail: `center forward`,
    teslim: `defender`
}

const obj5 = {
    jaykay: `center midfielder`,
    jordan: `forward`
}

const merge = {...obj1, ...obj2, ...obj3, ...obj4, ...obj5};

console.log(merge);