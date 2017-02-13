'use strict';

// showBooksTemplate requires the book-listing.handlebars
// handlebars.js returns the template as a function that can accept
// an object that represents the date the template needs
const showBooksTemplate = require('../templates/book-listing.handlebars');

// getBooksSuccess callback runs if the API call was successful
// and takes the data
const getBooksSuccess = (data) => {
  console.log(data);

  // showBooksHtml is a string of HTML that is made up
  // of the template showBooksTemplate and the data.books object
  let showBooksHtml = showBooksTemplate({ books: data.books });

  // selects the content element and appends new HTML into it
  $('.content').append(showBooksHtml);
};

const clearBooks = () => {
  $('.content').empty();
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  getBooksSuccess,
  clearBooks,
  failure,
};
