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
?>

