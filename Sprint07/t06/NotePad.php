<?php

    class NotePad {
        

        public function __construct() {
            
            if (!is_dir('notes')) {
                mkdir('notes');
            }
        }

        public function toList() {

            $arr = scandir('./notes');

            

            $string = "<ul>";
            foreach($arr as $key => $value) {

                



                if ($value != '.' && $value != '..') {

                    $file = fopen("./notes/$value", "a+") or die("Unable to open file!");          
                    $readed = fread($file, filesize("./notes/$value"));
                    fclose($file);          
                    $arr = json_decode($readed);
                    $date = explode('/', $arr->date);
                    $string .= "<li> <a href='?more=$value' value='$value'>" . $date[0] . "-" .$date[1]. "-" 
                                .$date[2]. " " .$date[3] .":" .$date[4]. ":" .$date[5] . "  ". $value . " >  </a> 
                                        <a href='?delete=$value' value='$value'>DELETE</a></li>";
                }
            }
            $string .= "</ul>";

            return $string;
        }
    }
?>