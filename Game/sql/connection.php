<?php
$servername = "localhost";
$username = "tmxshio_WPBTT ";
$password = "seahorse?1B";
$dbname = "tmxshio_WPBTT";


// Create connection
$mysqli_conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($mysqli_conn->connect_error) {
    die("Connection failed: " . $mysqli_conn->connect_error);
} 


