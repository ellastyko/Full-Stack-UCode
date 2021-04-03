<?php

    class FilesList {
        
        private $dir;

        public function __construct($dir) {
            
            if (!is_dir('tmp')) {
                mkdir('tmp');
            }
            $this->dir = "./$dir";
        }

        public function toList() {
            $arr = scandir($this->dir);
            $string = "";
            foreach($arr as $i) {
                if ($i != '.' && $i != '..') {
                    $string .= "<li> <a href='?file=$i' value='$i'> $i </a> </li>";
                }
            }
            return $string;
        }
    }
?>