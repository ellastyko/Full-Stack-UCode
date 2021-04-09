<?php
    class View {

        private $url;

        public function __construct($url) {

            $this->url = $url;           
        }


        public function render() {

            echo file_get_contents($this->url);
        }
    }

