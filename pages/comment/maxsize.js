
function saveComment(comment) {
    var maxSize = 1024 * 1024 * 1024; // 1 GB
    var existingComments = JSON.parse(localStorage.getItem('comments')) || [];
    var commentsSize = JSON.stringify(existingComments).length;
    var commentSize = JSON.stringify(comment).length;
    
    // Check if adding the new comment exceeds the size limit
    if (commentsSize + commentSize > maxSize) {
        // Remove older comments until the size limit is satisfied
        while (commentsSize + commentSize > maxSize && existingComments.length > 0) {
            var removedComment = existingComments.shift();
            commentsSize -= JSON.stringify(removedComment).length;
        }
    }
    

    existingComments.push(comment);

    localStorage.setItem('comments', JSON.stringify(existingComments));
}
