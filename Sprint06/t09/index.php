<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        input {
            width: 150px;
            margin: 10px 10px 0 0;
        }

        section {
            background: lightgrey;
            border: 1px solid grey;
            padding: 20px;
        }

    </style>
    <h1>New Avenger application</h1>


    <section>
        <h3><?php echo $_SERVER['REQUEST_METHOD']?></h3>
        <?php 
            if ($_POST['submit']) {
                $arr = [
                    'name' => $_POST['name'],
                    'email' => $_POST['mail'],
                    'age' => $_POST['age'],
                    'descriptions' => $_POST['about'],
                    'photo' => $_POST['file']
                ];
                
                echo "Array<br>(<br>";
                foreach ($arr as $k => $v)  {
                    echo "&emsp;[$k] => $v<br>";
                }
                echo ")\n";
            }              
        ?>
    </section>


    <form action="index.php" method="POST">

        <label for="name">Name: </label>
        <input id="name" name='name' required type="text" placeholder="Tell your name">       
        <label for="mail">E-mail: </label>
        <input id="mail" name='mail' type="email" required placeholder="Tell your e-mail">   
        <label for="age">Age: </label>
        <input id="age" name='age' type="number" required max="100" min="0">      
        <br><br>
        <label for="about">About: </label>
        <textarea name="about" id="about" cols="30" rows="6" placeholder="tell asbout yourself, max 500 symbols" maxlength="100" required></textarea>
        <br>
        <label for="file">Your photo: </label>
        <input id="file" name="file" type="file" required>
        <br>
        <input type="reset">
        <input name='submit' type="submit">
    </form>



</body>
</html>