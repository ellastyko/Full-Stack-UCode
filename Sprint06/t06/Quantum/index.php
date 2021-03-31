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
            $Time = $now->diff($past); 

            $arr = array();

            $arr[0] = intdiv($Time->format("%Y"), 7);
            $arr[1] = $Time->format("%m") + ($Time->format("%Y") - $arr[0] * 7);
            $arr[2] = $Time->format("%d");
        
            return $arr;
        }
        $time = calculate_time();
        echo "In quantum space you were absent for ". $time[0] . " years, ". 
                $time[1] . " months, ". $time[2] . " days";?></p>
</body>
</html>