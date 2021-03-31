<?php
    namespace Space\Quantum;
    use Datetime;
    
    function calculate_time() {
        
        $now = new DateTime('NOW');
        $past = new DateTime('1939-01-01');
        $time = $now->diff($past); 

        $arr = array();

        $arr[0] = intdiv($time->format("%Y"), 7);
        $arr[1] = $time->format("%m") + ($time->format("%Y") - $arr[0] * 7);
        $arr[2] = $time->format("%d");
       
        return $arr;
    }


?>