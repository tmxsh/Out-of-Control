<?php

//credentials and names to connect to the server
$servername = "localhost";
$username = "tmxshio_connect";
$password = "seahorse?1B";
$dbname = "tmxshio_WPBTT";


// Create connection
$mysqli_conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($mysqli_conn->connect_error) {
    die("Connection failed: " . $mysqli_conn->connect_error);
} 


