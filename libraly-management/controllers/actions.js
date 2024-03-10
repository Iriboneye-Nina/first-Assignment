
const { addBook, displayAvailableBooks, borrowBook, returnBook } = require('../index');

// Add books
addBook("Book 4", "Author 4");
addBook("Book 5", "Author 5");

// Display available books
console.log("Available Books:");
displayAvailableBooks();

// Borrow a book
borrowBook("Book 1");
borrowBook("Book 6"); // Trying to borrow a non-existent book

// Display available books after borrowing
console.log("Available Books after borrowing:");
displayAvailableBooks();

// Return a book
returnBook("Book 1");
returnBook("Book 6"); // Trying to return a non-existent book

// Display available books after returning
console.log("Available Books after returning:");
displayAvailableBooks();