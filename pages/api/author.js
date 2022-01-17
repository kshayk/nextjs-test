const mongoose = require('mongoose');
const Author = require('../../model/Author');

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(404).json({error: "Not Found"});
    }

    const data = req.body

    if (typeof data.first_name !== 'string' || typeof data.last_name !== 'string') {
        return res.status(400).json({error: "Bad Data Format"});
    }

    try {
        await mongoose.connect('mongodb://localhost:27017/onomagic');
    } catch (err) {
        return res.status(400).json({error: "Database connection failed"});
    }

    try {
        var author = await saveUser(data.first_name, data.last_name);
    } catch (err) {
        return res.status(400).json({error: "Failed to save author"});
    }

    res.status(200).json(author)
}

async function saveUser(firstName, lastName) {
    return await Author.create({
        firstName,
        lastName
    });
}