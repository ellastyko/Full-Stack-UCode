<?php
    // php t05/index.php |cat -e
    class StrFrequency {

        private $string;
        function __construct($string) {
            $this->string = $string;
        }

        function letterFrequencies() {
            $string = mb_strtoupper($this->string);
            $let_arr = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
            $arr = [];
            for ($i = 0; $i < strlen($let_arr); $i++) {
                $k = substr_count($string, $let_arr[$i]);
                if ($k > 0) {
                    $arr[$let_arr[$i]] = $k;
                }
            }

            return $arr;
        }

        function wordFrequencies() {

            $string = preg_replace('/[-,!]/', '', $this->string);
            $string = str_replace("'", "", $string);

            $string = mb_strtoupper($string);
            $str = str_word_count($string, 1); // Array of words
            $count = str_word_count($string);
            $arr = [];

            for ($i = 0; $i < $count; $i++) {
                $k = 0;
                for ($j = 0; $j < $count; $j++) {
                    if ($str[$i] == $str[$j])
                        $k++;
                }
                $arr[$str[$i]] = $k;
            }
            return $arr;
        }

        function reverseString() {
            $string = preg_replace('/[-,!]/', '', $this->string);
            $string = str_replace("'", "", $string);

            return strrev($string);
        }

    }

    // function test($string) {
    //     $obj = new StrFrequency($string);
    //     $symbol = $obj->letterFrequencies();
    //     echo "Letters in ". $string. "\n";
    //     foreach ($symbol as $k => $v) {
    //         echo"Letter ". $k . " is repeated ". $v . " times\n";
    //     }
    
    //     $symbolb = $obj->wordFrequencies();
    //     echo "Words in ". $string. "\n";
    //     foreach($symbolb as $k => $v) {
    //         echo"Word ". $k . " is repeated ". $v . " times\n";
    //     }
    //     echo "Reverse the string: ". $string. "\n";
    //     echo $obj->reverseString() . "\n";
    // }
    // test("Face it, Harley-- you and your Puddin' are kaput!");
    // echo"*************\n";
    // test("  Test test 123 45 !0 f   HeLlO wOrLd  ");
    // echo"*************\n";
    // test("");
?>