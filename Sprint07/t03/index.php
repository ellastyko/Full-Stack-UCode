


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
    </style>
    <h1>Charset</h1>
    <form action="index.php" method="POST">
        <label for='string'>Change charset: </label> 
        <input type='text' id='string' name='string' placeholder='Input string'>
        <br>
        <label>Select charset or several charsets: </label>
        <select name='charsets[]' multiple style='display: inline-block;'>
            <option name='utf' value='utf'>UTF-8</option>
            <option name='iso' value='iso'>ISO-8859-1</option>
            <option name='win' value='win'>Windows-1252</option>
        </select>
        <input type='submit' name='change_charset' >
        <input type='submit' name='clear' value='Reset'>
    </form>
    <?php 
        if (isset($_POST['change_charset'])) {
            
            $string = $_POST['string'];
            echo "<br> <label>Input string: </label><textarea name='output id='' 
                    cols='20' rows='3' placeholder='$ and € are currency'>$string</textarea> <br>";

            $arr = $_POST['charsets'];
            foreach ($arr as $i) {

                if ($i == 'utf') {
                    $encoded = mb_convert_encoding($string, "UTF-8");
                    echo "<label>UTF-8: </label><textarea name='utf-output' id='' cols='20' 
                    rows='3' placeholder='$ and € are currency'>$encoded</textarea> <br>";
                }
                elseif ($i == 'iso') {
                    $encoded = mb_convert_encoding($string , "ISO-8859-1");
                    echo "<label>ISO-8859-1: </label><textarea name='iso-output' id='' 
                    cols='20' rows='3' placeholder='$ and EUR are currency'>$encoded</textarea> <br>";
                }
                elseif ($i == 'win') {
                    $encoded = mb_convert_encoding($string , "Windows-1252");
                    echo "<label>Windows-1252: </label><textarea name='win-output' id='' 
                    cols='20' rows='3' placeholder='$ and � are currency'>$encoded</textarea> <br>";
                }
            } 
            if ($_GET['clear']) { }
        }
        else {

        }
    ?>

    
</body>
</html>