<?php
    namespace Space\Normal;
    use Datetime;

    function calculate_time() {
        $now = new DateTime('NOW');
        $past = new DateTime('1939-01-01');
        return $now->diff($past); 
    }
?>