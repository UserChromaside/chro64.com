// Function to save comment to local storage
function saveComment(comment) {
    // Retrieve existing comments from local storage
    var existingComments = JSON.parse(localStorage.getItem('comments')) || [];
    
    // Add new comment to the array
    existingComments.push(comment);
    
    // Save updated comments to local storage
    localStorage.setItem('comments', JSON.stringify(existingComments));
}

// Function to display comments from local storage
function displayComments() {
    var commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = ''; // Clear existing comments
    
    // Retrieve comments from local storage
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    
    // Display each comment
    comments.forEach(function(comment) {
        var commentElement = document.createElement('div');
        commentElement.textContent = comment;
        commentsDiv.appendChild(commentElement);
    });
}

// Function to handle comment submission
function submitComment() {
    var commentInput = document.getElementById('commentInput');
    var comment = commentInput.value.trim();
    
    if (comment !== '') {
        saveComment(comment); // Save comment to local storage
        displayComments(); // Display updated comments
        commentInput.value = ''; // Clear input field
    }
}

// Display comments when the page loads
window.addEventListener('load', displayComments);
