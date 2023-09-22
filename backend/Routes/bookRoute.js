const express = require('express');
const {createBook, getAllBooks, getBooks, updateBook, deleteBook} =require('../controller/bookControl')

const router = express.Router();


router.route("/book/new").post(createBook);
router.route("/book").get(getAllBooks);
router.route("/book/:id").get(getBooks);
router.route("/book/:id").put(updateBook);
router.route("/book/:id").delete(deleteBook);
module.exports=router;