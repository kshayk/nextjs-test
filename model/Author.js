const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

let Author;
if (mongoose.models.Author) {
    Author = mongoose.model('Author');
} else {
    Author = mongoose.model('Author', AuthorSchema);
}

module.exports = Author