// pages/saveComment.js

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const { comment } = req.body;
        if (!comment) {
            return res.status(400).json({ error: 'Comment is required' });
        }

        // Save comment to file, database, or other storage mechanism
        // For demonstration purposes, let's just log it here
        console.log('New Comment:', comment);

        return res.status(200).json({ message: 'Comment submitted successfully' });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
};
