<?php

    class Router {

        public $params = Array();

        public function __construct() {
             
            $this->params = $_GET;
            if (count($this->params) != null)
                print_r($this->params);
        }


    }

