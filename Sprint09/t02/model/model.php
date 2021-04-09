<?php

    abstract class model {

        protected $connection;
        
        public function __construct() {

            $this->setConnection();      
        }

        public function setConnection() {

            $this->connection = new DatabaseConnection('127.0.0.1', '3000', 'vsergeev', 'securepass', 'ucode_web');
        }
        
        
    }    
?>