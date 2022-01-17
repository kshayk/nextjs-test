const Author = require('../../../model/Book');

export default function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(404).json({ error: 'Not Found' })
    }
    res.status(200).json({ name: 'John Doe' })
}