'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const onGetBooks = (event) => {
  event.preventDefault();
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure);
};

const onClearBooks = (event) => {
  event.preventDefault();
  ui.clearBooks();
};

const logOwnId = (event) => {
  event.preventDefault();
  console.log($(event.target).parent().data("id"));
};

const addHandlers = () => {
  $('#getBooksButton').on('click', onGetBooks);
  $('#clearBooksButton').on('click', onClearBooks);

  // applying a click event to the #content element for when any of its children
  // with the class clickable get clicked
  $('#content').on('click', '.clickable', logOwnId);
};

module.exports = {
  addHandlers,
};
