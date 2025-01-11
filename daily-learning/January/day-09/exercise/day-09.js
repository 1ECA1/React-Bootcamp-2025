
// Step 1: Create an array called 'library' with three book objects
const library = [
    {
        title: "so Long A Letter",
        author: "Mariama",
        available: true,
    },
    {
        title: "The finished Road",
        author: "Ben Okri",
        available: false,
    },
    {
        title: "Moby Dick",
     author: "Herman Melville",
     available: true,
    }
];

// Step 2: 
library.push({
    title: "Season of the Migrationto the north",
    author: "Tayeb salih",
    available: true,
});

// Step 3: 
const availableBooks = library.filter(book => book.available);
console.log("Available Books:", availableBooks);

// Step 4:
const foundBook = library.find(book => book.title === "Season of the Migrationto the north");
console.log("Found Book:", foundBook);

// Step 5: 
const borrowBookTitle = "Season of the Migrationto the north";
const borrowBook = library.find(book => book.title === borrowBookTitle);
if (borrowBook) borrowBook.available = false;
console.log(`Updated Library after borrowing '${borrowBookTitle}':, library`);

// Step 6: 
const bookDescriptions = library.map(book => `${book.title} by ${book.author}`);
console.log("Book Descriptions:", bookDescriptions);