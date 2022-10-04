<html>
<body>

<?php 
      	include("connection.php");
      
	$username   = $_GET["Username"];
	$password = $_GET["Password"];

	//$sql = "INSERT INTO login values ('".$username."','".$password."')";

    $result = mysql_query("SELECT COUNT(*) AS num_rows FROM login WHERE username='{$username}' LIMIT 1;");
    
	//if ($mysqli_conn->query($sql) === TRUE) {
    //		echo "New login created successfully";
	//} else if ($username || $password) {
	//   echo "Error: " . $sql . "<br>" . $mysqli_conn->error;
	//}
	$row = mysql_fetch_array($result);
    if($row["num_rows"] > 0){
       //user exists
    }
	$mysqli_conn->close();
?> 

<br>


</body>
</html>
