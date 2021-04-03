<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
        $time = time();
        $public = "7cec0b84c1221e6f6623a600e1a73ad4";
        $hash = md5($time . "e7aa690736adc2105665ebad66fe2480d1eacfd7" . $public);
        
        $html = file_get_contents("http://gateway.marvel.com/v1/public/comics?ts=$time&apikey=$public&hash=$hash");
        $json = json_decode($html, true);



        foreach ($json as $key => $value) {
            if ($key != 'data')
                echo "<div class='main'><span>" . $key. "</span>:\t\t\t". $value . "</div>";
            else {
                echo output($key, $value);           
            }
        }


        function output($key, $value) {
            $string = "<div>$key:";
            foreach ($value as $k => $v) {
                if (gettype($v) == 'array') {
                    $string .= output($k, $v);
                    continue;
                }
                    
                $string .= "<div class='main'><span>" . $k. "</span>:\t". $v . "</div>";
            }
            $string .= "</div>";

            return $string;
        }



    ?>
</body>
</html>