<html>
<body>

<?php 
    //needed to connect to the sql server
    include("gamestate.php");
      
    //these are received from the login form  
    	$deckp1 = $_GET["deckp1"];
    	$deckp2 = $_GET["deckp2"];
    	$board = $_GET["board"];
	$handp1 = $_GET["handp1"];
	$handp2 = $_GET["handp2"];
	$graveyardp1 = $_GET["graveyardp1"];
	$graveyardp2 = $_GET["graveyardp2"];

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
