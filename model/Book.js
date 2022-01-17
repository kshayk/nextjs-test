const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
});

let Book;
if (mongoose.models.Book) {
    Book = mongoose.model('Book');
} else {
    Book = mongoose.model('Book', BookSchema);
}

module.exports = Book