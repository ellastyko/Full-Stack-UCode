<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p><?php 
    
            function calculate_time() {
                $now = new DateTime('NOW');
                $past = new DateTime('1939-01-01');
                return $now->diff($past); 
            }       
            
            $time = calculate_time();
            echo "In real life you were absent for ". $time->format("%Y") . " years, ".
            $time->format("%m") . " months, ". $time->format("%d") . " days"; 
        ?></p>
</body>
</html>