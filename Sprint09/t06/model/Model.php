
<?php

    class Model {

        public $login;
        public $password;
        public $fullname;
        public $email;
        public $admin;
        public $error_message;

        public function __construct() {
            $this->setConnection();      
        }

        public function __destruct() {
            $this->connection = null;
        }

        public function setConnection() {

            $this->connection = new DatabaseConnection('127.0.0.1', '3000', 'vsergeev', 'securepass', 'ucode_web');
        }

        public function error() {
            return $this->error_message;
        }
        
        
        public function restore() {

            $command = $this->connection->connection->query("SELECT password, email FROM users WHERE login=\"$this->login\";"); 
            $result = $command->fetch(PDO::FETCH_ASSOC);
            if ($result != null) {
                mail($result['email'], 'Restore password', 'Your password:  ' . $result['password']);
                return true;
            }          
            else {}
                $this->error_message =  "<h3>User isn`t exists!</h3>";
            return false;
        }

        public function signin() {

            if ($this->connection->getConnectionStatus()) {
                
                $command = $this->connection->connection->query("SELECT password, admin FROM users WHERE login=\"$this->login\";"); 
                $result = $command->fetch(PDO::FETCH_ASSOC);
                
                if ($result == null) {
                    $this->error_message = 'User with this login isn`t exists';
                    return false;
                } 
                else {
                    if ($result['password'] != $this->password) {
                        $this->error_message = 'Incorrect password';
                        return false;
                    }
                }
                $this->admin = $result['admin'];
                return true;
            }          
            return false;
        }

        public function save() {
            

            if ($this->connection->getConnectionStatus()) {
                
                $command = $this->connection->connection->query("SELECT * FROM users WHERE login=\"$this->login\";"); 
                $result = $command->fetch(PDO::FETCH_ASSOC);
                if ($result != null) {
                    $this->error_message = 'User with this login already exists';
                    return false;
                } 
                $command = $this->connection->connection->query("SELECT * FROM users WHERE email=\"$this->email\";"); 
                $result = $command->fetch(PDO::FETCH_ASSOC);
                if ($result != null) {
                    $this->error_message = 'User with this e-mail already exists';
                    return false;
                }

                $sql = 'INSERT INTO users(login, password, fullname, email) VALUES ("' . $this->login . '","' . $this->password . '","' . $this->fullname . '","' . $this->email . '");';

      
                $this->connection->connection->query($sql);
                return true;             
            }        
        }
        
        
    }    
?>