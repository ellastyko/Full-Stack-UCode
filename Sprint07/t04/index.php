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
    <h1>Files</h1>
    <form action="./index.php" method='post'>
        <label for='name'>File name: </label> <input name='filename' type='text' required>
        <label for='name'>Content: </label> <textarea name='content' id='content' cols='20' rows='5' required></textarea>
        <input type='submit' value='Create file' name='create'>
    </form>
    <?php
        
        if ($_POST['create']) {
            
            $filename = $_POST['filename'];

            $file = new File("tmp/$filename");
            $file->write($_POST['content']);

            $list = new FilesList("tmp");
            $string = $list->toList();

            echo "<h1>List of files</h1>
                    <ul>$string</ul>";
            
        }
        if ($_POST['reset']) {

            $temp = $_POST['temp'];
            unlink(glob($temp)[0]); // delete file

            $list = new FilesList("tmp");
            $string = $list->toList();

            echo "<h1>List of files</h1>
                    <ul>$string</ul>";
        }
        if ($_GET['file']) {
            $list = new FilesList("tmp");
            $string = $list->toList();

            echo "<h1>List of files</h1>
                    <ul>$string</ul>";

            $arr = scandir('./tmp');
            foreach ($arr as $i) {
                if ($_GET['file'] == $i) {
                    $temp = "tmp/$i";
                    $selected = new File($temp);
                    $readed = $selected->toList();
                    
                    echo    "
                                <br> 
                                    <form action='index.php' method='POST'> 
                                        <h1>Selected file: \"$temp\"</h1> 
                                        <input type='text' name='temp' value='$temp' hidden>
                                        <input type='submit' name='reset' value='Delete file'> 
                                    </form>
                                <br> <br> $readed";
                }
            }         
        }

        
    ?>

    
    
</body>
</html>