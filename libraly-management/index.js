const actions = require('./controllers/actions');

const { books, updateBookAvailability } = require('./database');

function addBook(title, author) {
    const newBook = { title, author, availability: true };
    books.push(newBook);
  }
  
  function displayAvailableBooks() {
    const availableBooks = books.filter(book => book.availability);
    availableBooks.forEach(book => {
      console.log(`Title: ${book.title}, Author: ${book.author}`);
    });
  }
  function borrowBook(title) {
    const success = updateBookAvailability(title, false);
    if (success) {
      console.log(`You have successfully borrowed "${title}".`);
    } else {
      console.log(`Sorry, "${title}" is not available.`);
    }
  }
  
function returnBook(title) {
    const success = updateBookAvailability(title, true);
    if (success) {
      console.log(`You have successfully returned "${title}".`);
    } else {
      console.log(`"${title}" is not a valid book.`);
    }
  }   
  module.exports = {
    addBook,
    displayAvailableBooks,
    borrowBook,
    returnBook
  };