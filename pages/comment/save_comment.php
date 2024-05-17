<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $comment = $_POST["comment"];
    // Save comment to comments.txt
    file_put_contents("comments.txt", $comment . PHP_EOL, FILE_APPEND);
}
?>
