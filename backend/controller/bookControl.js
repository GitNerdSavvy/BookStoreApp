const Book = require("../Models/bookModel");

// Create Book
exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);

    res.status(201).json({
      success: true,
      book: newBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating book",
    });
  }
};

// Get all Books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      success: true,
      count: books.length,
      books: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching books",
    });
  }
};

// Get Book details
exports.getBooks = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      book: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching book details",
    });
  }
};

// Update Book
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      book: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching book details",
    });
  }
};

// Delete Book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching book details",
    });
  }
};
