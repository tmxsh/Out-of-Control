<html>
<body>

<?php 
    //used to connect to the sql server
    include("connection.php");
      
    //gotten from the login form  
	$username   = $_GET["Username"];
	$password = $_GET["Password"];

	
    //our sql query
    $query = "SELECT * FROM login WHERE username = '$username' AND password = '$password'";
    
    $queryBasic = "SELECT * FROM login WHERE username = '$username'";
    $resultBasic = $mysqli_conn->query($queryBasic);
    
    
    //store the result 
    $result = $mysqli_conn->query($query);
    
    //echo $query;
    if($resultBasic)
    {
        if ($result) {
            if (mysqli_num_rows($result) > 0) { //on success - take us to the game
                echo "<meta http-equiv='refresh' content='0;../game/game.html' />";
                exit();
                } else {
                    echo "<meta http-equiv='refresh' content='0;../login/create.html'/>"; // on failure aka no account found, bring us to the account creation page
                    exit();
                }
        } else {
            echo 'Error: '.mysqli_error();
    }
        echo 'No account found';
}
    
	$mysqli_conn->close();
?> 

<br>


</body>
</html>
