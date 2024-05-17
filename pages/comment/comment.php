<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $comment = $_POST['comment'];
    
    // Open the text file for appending
    $file = fopen("comments.txt", "a") or die("Unable to open file!");
    
    // Format the comment
    $formatted_comment = "Name: $name\nComment: $comment\n\n";
    
    // Write the comment to the file
    fwrite($file, $formatted_comment);
    
    // Close the file
    fclose($file);
    
    // Redirect back to the page after submitting the comment
    header("Location: index.php");
    exit();
}
?>
