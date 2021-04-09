<?php

    class View {

        private $url;

        public function __construct($url) {

            $this->url = $url;           
        }


        public function render() {
            ob_clean();
            echo file_get_contents($this->url);
        }

    }

    $file = new View('./t02/index.html');
    $file->render();
?>