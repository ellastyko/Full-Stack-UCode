<?php
    class DatabaseConnection {
        
        public $connection;
        public function __construct($host, $port, $username, $password, $dbname) {


            try {
                $this->connection = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);        
            }
            catch (PDOException $ex) {
                echo $ex->getMessage();
                die();
            }
        }

        public function __destruct() {
            $this->connection = null;
        }

        public function getConnectionStatus() {
            return (isset($this->connection) ? true : false);
        }
    }


    
    // $host = "127.0.0.1";
    // $port = '3000';
    // $dbname = "ucode_web";
    // $username = "vsergeev";
    // $password = "securepass";
    // $connection_to_db = new DatabaseConnection($host, $port, $username, $password, $dbname);
    // echo $connection_to_db->getConnectionStatus();
    
?>

