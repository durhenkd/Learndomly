<?php

session_start();

	include("connection.php");
	include("functions.php");

	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$user_name = $_POST['user_name'];
		$password = $_POST['password'];

		if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
		{

			//read from database
			$query = "select * from users where user_name = '$user_name' limit 1";
			$result = mysqli_query($con, $query);

			if($result)
			{
				if($result && mysqli_num_rows($result) > 0)
				{

					$user_data = mysqli_fetch_assoc($result);

					if($user_data['password'] === $password)
					{

						$_SESSION['user_id'] = $user_data['user_id'];
						header("Location: index.html");
						die;
					}
				}
			}

			echo "wrong username or password!";
		}else
		{
			echo "wrong username or password!";
		}
	}



?>


<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Learndomly</title>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
    </head>
<center>
    <body id="bcklgn">
<div id="box">
  <form method="post">
    <div style="font-size: 20px;margin: 10px; color:red;">Login</div>

    <input id="text" type="text" name="user_name"><br><br>
    <input id="text" type="password" name="password"><br><br>

      <input id="button" type="submit" value="Login"><br><br>

      <a href="signup.php"> Click to 	SignUp</a><br><br>



  </div>
</center>
    </body>

</html>
