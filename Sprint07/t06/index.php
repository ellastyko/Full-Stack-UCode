<?php

    function autoload($pClassName) {
        include(__DIR__. '/' . $pClassName. '.php');
    } 
    spl_autoload_register("autoload");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Notepad mini</h1>
    <form action="index.php" method='POST'>
        <input type='text' name='name' placeholder='Name' required>
        <br><br>
        <select name='select'>
            <option name='low' value='low' selected>low</option>
            <option name='medium' value='medium'>medium</option>
            <option name='high' value='high'>high</option>        
        </select>
        <br><br>
        <textarea name='text' cols='20' rows='5' style='resize: none;' placeholder='text of note'></textarea>
        <br><br>
        <input type='submit' name='submit' value='Create'>
    </form>
    <h1>List of notes</h1>

    <?php
        if ($_POST['submit']) {

            $obj = new Note($_POST['name']);
            $obj->save($_POST['name'], $_POST['select'], $_POST['text']);

            $files = new NotePad();
            echo $files->toList();
        }
        if ($_GET['more']) {

            $files = new NotePad();
            echo $files->toList();

            $obj = new Note($_GET['more']);
            echo $obj->toList();
        }
        if ($_GET['delete']) {

            $obj = new Note($_GET['delete']);
            echo $obj->delete();

            $files = new NotePad();
            echo $files->toList();
        }
    ?>
</body>
</html>