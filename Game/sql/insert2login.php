<html>
<body>

<?php 
      	include("connection.php");
      
	$username   = $_GET["Username"];
	$password = $_GET["Password"];

	$sql = "INSERT INTO login values ('".$username."','".$password."')";

	if ($mysqli_conn->query($sql) === TRUE) {
    		echo "New login created successfully";
	} else if ($username || $password) {
	    echo "Error: " . $sql . "<br>" . $mysqli_conn->error;
	}
	
	$mysqli_conn->close();
?> 

<br>


</body>
</html>
