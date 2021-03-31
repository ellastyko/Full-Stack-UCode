<?php

    function checkDivision($a = 1 , $b = 60) {
        $result;
        
        for  ($i = $a; $i <= $b; $i++) {
            $result;
            if ($i % 2 == 0 || $i % 3 == 0 || $i % 10 == 0) {


                if ($i % 2 != 0 && $i % 3 == 0) {
                    $result = "The number " . $i . " is divisible by 3";
                }   
                if ($i % 10 != 0 && $i % 3 != 0 && $i % 2 == 0) {
                    $result = "The number " . $i . " is divisible by 2";
                }  
                if ($i % 10 != 0 && $i % 3 == 0 && $i % 2 == 0) {
                    $result = "The number " . $i . " is divisible by 2, is divisible by 3";
                }                    
                if ($i % 10 == 0 && $i % 3 != 0) {
                    $result = "The number " . $i . " is divisible by 2, is divisible by 10";
                }
                if ($i % 10 == 0 && $i % 3 == 0) {
                    $result = "The number " . $i . " is divisible by 2, is divisible by 3, is divisible by 10";
                }
                
                echo $result . "\n";
            }
            else {
                echo "The number " . $i . " -\n";
            }        
        }

    }

    // echo "*** Range is 3 - 7 checkDivision(3,7) ***\n";
    // checkDivision(3,7);
    // echo"\n*** Range is 58 - ... checkDivision(58) ***\n";
    // checkDivision(58);
    // echo"\n*** Range is ... - ... checkDivision() ***\n";
    // checkDivision();
?>