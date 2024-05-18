// Function to create a new issue (comment) in the GitHub repository
function createIssue(comment) {
    fetch('https://api.github.com/repos/UserChromaside/userchromaside.github.io/issues', {
        method: 'POST',
        headers: {
            'Authorization': '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',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'New Comment',
            body: comment
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create issue');
        }
        return response.json();
    })
    .then(data => {
        console.log('Issue created successfully:', data);
        getComments(); // Reload comments after new comment is submitted
    })
    .catch(error => {
        console.error('Error creating issue:', error);
    });
}

// Function to display comments from the GitHub repository
function getComments() {
    fetch('https://api.github.com/repos/username/repository/issues')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch comments');
        }
        return response.json();
    })
    .then(data => {
        displayComments(data);
    })
    .catch(error => {
        console.error('Error fetching comments:', error);
    });
}

// Function to display comments on the webpage
function displayComments(comments) {
    var commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = ''; // Clear existing comments
    
    comments.forEach(comment => {
        var commentElement = document.createElement('div');
        commentElement.textContent = comment.body;
        commentsDiv.appendChild(commentElement);
    });
}

// Submit comment form handler
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var commentInput = document.getElementById('commentInput');
    var comment = commentInput.value.trim();
    
    if (comment !== '') {
        createIssue(comment); // Create a new issue with the comment
        commentInput.value = ''; // Clear input field
    }
});

// Load comments when the page loads
window.addEventListener('load', getComments);
