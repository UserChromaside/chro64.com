// pages/getComments.js

module.exports = async (req, res) => {
    // Retrieve comments from file, database, or other storage mechanism
    // For demonstration purposes, let's return static comments
    const comments = [
        'First comment',
        'Second comment',
        'Third comment'
    ];

    return res.status(200).json(comments);
};
