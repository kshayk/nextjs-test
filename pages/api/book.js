const mongoose = require('mongoose');
const Book = require('../../model/Book');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(404).json({error: "Not Found"});
    }

    const data = req.body

    if (typeof data.book_name !== 'string' || typeof data.isbn !== 'string' || typeof data.author !== 'string') {
        return res.status(400).json({error: "Bad Data Format"});
    }

    try {
        await mongoose.connect('mongodb://localhost:27017/onomagic');
    } catch (err) {
        return res.status(400).json({error: "Database connection failed"});
    }

    try {
        var book = await saveBook(data.book_name, data.isbn, data.author);
    } catch (err) {
        return res.status(400).json({error: "Failed to save book"});
    }

    res.status(200).json(book)
}

async function saveBook(bookName, isbn, authorID) {
    return await Book.create({
        bookName,
        isbn,
        author: mongoose.Types.ObjectId(authorID)
    });
}