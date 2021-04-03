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
        h4 {
            display: block;
            height: 35px;
            line-height: 35px;
            border-top: 1px solid grey;
            border-bottom: 1px solid grey;
        }
    </style>
    <h1>Show other sites</h1>
    <form action="index.php" method='GET'>
        <input type="text" name='url' required placeholder='url'>
        <input type="submit" name='go' value='go'>
        <a href="?back=true">BACK</a>
    </form>

    <?php
        if (isset($_GET['go'])) {
            $url = $_GET['url'];
            $content = file_get_contents($url);
            $content = substr($content, strpos($content, "<body"), strpos($content, "</body>") - strpos($content, "<body") + 7);
            $content = str_replace("<", "&lt;", $content);
            $content = str_replace(">", "&gt;", $content);
            $content = nl2br($content);

            echo "<h4>url: ". $url ."</h4>";
            echo($content);      
        }
        if ($_GET['back']) {
            echo "<p>Type an url</p>";
        }




        
    ?>
</body>
</html>