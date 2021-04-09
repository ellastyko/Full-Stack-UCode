
<?php

    abstract class Model {

        protected $connection;
        abstract protected function find($id);
        abstract protected function delete();
        abstract protected function save();

        public function __construct() {

            $this->setConnection();
            $this->setTable();         
        }

        protected function setTable() {

            $this->connection->connection->exec("CREATE TABLE IF NOT EXISTS heroes(
                                            
                                                id          INTEGER AUTO_INCREMENT PRIMARY KEY  NOT NULL, 
                                                name        CHAR(30) UNIQUE                     NOT NULL, 
                                                description VARCHAR(1000)                      NOT NULL, 
                                                race        VARCHAR(1000) DEFAULT 'human'       NOT NULL, 
                                                class_role  ENUM('tankman', 'healer', 'dps')    NOT NULL
                                            );");
        }

        public function setConnection() {

            $this->connection = new DatabaseConnection('127.0.0.1', '3000', 'vsergeev', 'securepass', 'ucode_web');
        }
        
        
    }    
?>