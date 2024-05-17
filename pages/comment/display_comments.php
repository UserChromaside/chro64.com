<?php
// Open the text file for reading
$file = fopen("comments.txt", "r") or die("Unable to open file!");

// Output comments
while (!feof($file)) {
    echo fgets($file) . "<br>";
}

// Close the file
fclose($file);
?>
