<?php

    class File {

        private $path;
        public function __construct(string $path) {
            if (!is_dir('tmp')) {
                mkdir('tmp');
            }
            $this->path = $path;
        }

        public function write(string $text) {

            $file = fopen("$this->path", "a+") or die("Unable to open file!");
            fwrite($file, $text);
            fclose($file);
        }

        public function toList() {

            $file = fopen("$this->path", "a+") or die("Unable to open file!");       
            $readed = fread($file, filesize($this->path));
            fclose($file);
            return $readed;
        }
    }
?>