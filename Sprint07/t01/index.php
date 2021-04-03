<?php session_start(); ?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Session for new</h1>
    <?php 



        if (!$_POST['submit']) {
            echo "<form action='index.php' method='POST' >
                    <fieldset>
                        <legend>About the Superhero</legend>
                        <label for='rn'>Real Name</label> <input name='name' id='rn' type='text' autofocus required>
                        <label for='sn'>Superhero Name</label> <input name='alias' id='sn' type='text'>
                        <label for='age'>Age</label> <input id='age' name='age' type='number' min='1' max='999'>
                        <br> <br>
                        <label for='about'>About</label> 
                        <textarea name='description' id='about' cols='70' rows='5' maxlength='500'></textarea>
                        <p>Photo: <input name='photo' type='file'></p> 
                    </fieldset>
                    <fieldset>
                        <legend>Powers</legend>
                        <input type='checkbox' name='STRENGTH'> <label for=''>Strength</label>
                        <input type='checkbox' name='SPEED'> <label for=>Speed</label>
                        <input type='checkbox' name='INTELLIJ'> <label for=''>Intelligence</label>
                        <input type='checkbox' name='TELEPORT'> <label for=''>Teleportation</label>
                        <input type='checkbox' name='IMMORTAL'> <label for=''>Immortal</label>
                        <input type='checkbox' name='ANOTHER'> <label for=''>Another</label>
                        <br> <br>
                        <label for=''>Level of control</label><input name='level' type='range'>
                    </fieldset>
                    <fieldset>
                        <legend>Publicity</legend>
                        <input type='radio' name='purpose' value='0'> <label >Unknown</label>
                        <input type='radio' name='purpose' value='1'> <label >LIKE A GHOST</label>
                        <input type='radio' name='purpose' value='2'> <label >I AM IN COMICS</label>
                        <input type='radio' name='purpose' value='3'> <label >I HAVE FUN CLUB</label>
                        <input type='radio' name='purpose' value='4'> <label >SUPERSTAR</label> 
                    </fieldset>
                    <input type='reset' name='reset'>
                    <input type='submit' name='submit'>
                </form>";
        }
        elseif ($_POST['submit']) {

            $arr = Array('STRENGTH', 'SPEED', 'INTELLIJ', 'TELEPORT', 'IMMORTAL', 'ANOTHER');
            foreach ($arr as $checkbox) {
                if ($_POST[$checkbox] == 'on') 
                    $count++;             
            }

            $name = $_POST['name'];
            $alias = $_POST['alias'];
            $age = $_POST['age'];
            $description = $_POST['description'];
            $photo = $_POST['photo'];
            $experience = $count;
            $level = $_POST['level'];
            $purpose = $_POST['purpose'];
            echo "<section>
                    <h1>Session for new</h1>
                    <p>name:  $name</p>
                    <p>alias: $alias</p>
                    <p>age: $age</p>
                    <p>description: $description </p>
                    <p>photo: $photo</p>
                    <p>experience: $experience</p>
                    <p>level:  $level</p>
                    <p>purpose: $purpose</p>
            
                    <br>
            
                    <form action='index.php' method='post'>
                        <input type='submit' value='Forget' name='reset'>
                    </form>
                </section>";
        }
    ?>
    
    
</body>
</html>