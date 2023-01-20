const mongo = require('mongoose');

const booksSchema = new mongo.Schema({

  book_name: {
    type: String,
    required: true
  },
  book_img: {
    type: String,
    required: true
  },
  book_download: {
    type: String,
    required: true
  },
  book_desc: {
    type: String,
    required: true
  },
  book_category: {
    type: String,
    required: true
  }
}, { collection: 'Books_Data' });

const BooksData = mongo.model('Books_Data', booksSchema);

module.exports = BooksData;