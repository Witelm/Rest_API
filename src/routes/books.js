const router = require("express").Router();

const {
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

router.get("/books", getBooks);
router.get("/books/:books_id", getBook);
router.patch("/books", updateBook);
router.delete("/books/:book_id", deleteBook);

module.exports = router;
