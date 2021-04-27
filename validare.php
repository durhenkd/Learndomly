<?php
session_start();
$_SESSION['message'] = '';

$mysqli = new mysqli('localhost', 'root', 'root', 'accounts');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $username = $mysqli->real_escape_string($_POST['username']);

    $_SESSION['username'] = $username;

    $sql = "INSERT INTO users (username)" . "VALUES ('$username')";

    // if the query is successful, redirect to play page
    if ($mysqli->query($sql) === true) {
        header("location: play.php");
    } else {
        $_SESSION['message'] = "Username exist";
        header("location: index.php");
    }

}

?>
