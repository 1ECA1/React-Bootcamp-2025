// Enter two promises and consume them afterwards
// First Promise
const promise1 = new Promise((resolve, reject) => { 
    const a = 1 + 1;
    if (a === 2) {
        resolve(`Promise 1 resolved with value: ${a}`);
    } else {
        reject(`Promise 1 failed with value: $`);
    }
});

// Second Promise
const promise2 = new Promise((resolve, reject) => {
    const b = 2 * 2;
    if (b === 4) {
        resolve(`Promise 2 resolved with value: ${b}`);
    } else {
        reject(`Promise 2 failed with value: $`);
    }
});

// Consuming both promises

Promise.all([promise1, promise2])
    .then(results => {
        console.log(`All promises resolved:`);
        console.log(results);
    })
    .catch(error => {
        console.error(`One of the promises failed:`, error);
    });


// Output:
// All promises resolved:
// [ 'Promise 1 resolved with value: 2',
//   'Promise 2 resolved with value: 4' ]


