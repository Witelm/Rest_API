const { request, response } = require("express");
const Book = require("../models/book");

const getBooks = (request, response) => {
  return Book.find({})
    .then((data) => {
      response.status(200).send(data);
    })
    .catch((e) => response.status(500).send(e.message));
};

const getBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findById(book_id)
    .then((book) => {
      response.status(200).send(book);
    })
    .catch((e) => response.status(500).send(e.message));
};

const updateBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findByIdAndUpdate(book_id, { ...response.body })
    .then((book) => response.status(200).send(book))
    .catch((e) => response.status(500).send(e.message));
};

const deleteBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findByIdAndDelete(book_id)
    .then((book) => {
      response.status(200), send("Success");
    })
    .catch((e) => response.status(500).send(e.message));
};

module.exports = {
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
