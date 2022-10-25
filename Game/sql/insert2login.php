<html>
<body>

<?php 
    //needed to connect to the sql server
    include("connection.php");
      
    //these are received from the login form  
	$username   = $_GET["Username"];
	$password = $_GET["Password"];

    //our sql query
	$sql = "INSERT INTO login values ('".$username."','".$password."')";

    
	if ($mysqli_conn->query($sql) === TRUE) { //success
    		echo "New login created successfully";
	} else if ($username || $password) { //failure
	    echo "Error: " . $sql . "<br>" . $mysqli_conn->error;
	}
	
	$mysqli_conn->close();
?> 

<br>


</body>
</html>
