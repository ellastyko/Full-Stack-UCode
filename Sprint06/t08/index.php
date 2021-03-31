<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="POST">

        <h1>What Thanos did for the Soul Stone?</h1>

        <input id="jump" name='choise' type="radio" value='1'> 
        <label for="jump">Jumped from the mountain</label>
        <br>
        <input id="keeper" name='choise' type="radio" value='2'>
        <label for="keeper">Made stone keeper to jump from the mountain</label>
        <br>
        <input id="push" name='choise' type="radio" value='3'>
        <label for="push">Pushed gamora off the mountain</label>
        <br><br>
        <input type="submit">
    </form>
    <p>
        <?php 
            
            if ($_POST['choise'] == 1) {
                echo "Shame on you! Go and watch Avengers";
            }           
            else if ($_POST['choise'] == 2) {
                echo "Shame on you! Go and watch Avengers";
            }                           
            else if ($_POST['choise'] == 3) {
                echo "Good job bro!";
            }
            
        ?>
    </p>
</body>
</html>