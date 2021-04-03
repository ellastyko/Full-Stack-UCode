<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Password</h1>
    <?php 

        if ($_POST['input_data']) {
            $salt = $_POST['salt'];
            $password = $_POST['password'];
            $hash = md5($password.$salt);

            $_SESSION['hash'] = $hash;
            $_SESSION['salt'] = $salt;
            echo "<form action='index.php' method='POST'>
                    <p>Password saved at session.</p>
                    <p><?php echo 'Hash is '  . $hash; ?> </p>
                    <label for='guess'>Try to guess</label> 
                    <input name='pass' type='text' placeholder='Password to session'> 
                    <input type='submit' name='check_password' value='Check password'>
                    <br> 
                    <input type='reset' value='Clear'>
                </form>";
        }
        elseif ($_POST['check_password']) {     

                $hash = $_SESSION['hash'];
                $salt = $_SESSION['salt'];
                $red = "style='color: red;'";
                $green = "style='color: green;'";
                if ($hash == md5($_POST['pass'].$salt)) {
                    $status = "Hacked!";
                    echo    "<form action='index.php' method='POST'>    
                        <h3 $green>$status</h3>   
                        <p>Password not saved at session</p>
                        <label for='password'>Password for saving session</label> <input type='text' name='password' placeholder='Password to session'> 
                        <br><br>
                        <label for='salt'>Salt for saving to session</label> <input id='salt' name='salt' type='text' placeholder='Salt to session'>
                        <br><br>
                        <input type='submit' name='input_data'>                      
                    </form>";
                    session_destroy();
                }
                else {
                    $status = "Access denied!";
                    echo    "<form action='index.php' method='POST'>    
                        <h3 $red>$status</h3>   
                        <p>Password not saved at session</p>
                        <label for='password'>Password for saving session</label> <input type='text' name='password' placeholder='Password to session'> 
                        <br><br>
                        <label for='salt'>Salt for saving to session</label> <input id='salt' name='salt' type='text' placeholder='Salt to session'>
                        <br><br>
                        <input type='submit' name='input_data'>                      
                    </form>";
                }  
        }
        else {
            echo    "<form action='index.php' method='POST'>       
                        <p>Password not saved at session</p>
                        <label for='password'>Password for saving session</label> <input type='text' name='password' placeholder='Password to session'> 
                        <br><br>
                        <label for='salt'>Salt for saving to session</label> <input id='salt' name='salt' type='text' placeholder='Salt to session'>
                        <br><br>
                        <input type='submit' name='input_data'>                      
                    </form>";
        }
        
    ?>
    
</body>
</html>