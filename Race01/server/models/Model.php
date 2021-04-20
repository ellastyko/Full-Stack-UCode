
<?php
    require_once (__DIR__ . '/connection/DatabaseConnection.php');

    class Model {

        public $login;
        public $password;
        public $email;
        public $response;
        public $photo;

        public function __construct() {
            $this->setConnection();      
        }

        public function __destruct() {
            $this->connection = null;
        }

        public function setConnection() {

            $this->connection = new DatabaseConnection('127.0.0.1', '3000', 'vsergeev', 'securepass', 'card_game');
        }


        
        
        public function restore() {

            $this->response['action'] = 'restore';
            $command = $this->connection->connection->query("SELECT password, email FROM users WHERE login=\"$this->login\";"); 
            $result = $command->fetch(PDO::FETCH_ASSOC);
            if ($result != null) {
                mail($result['email'], 'Restore password', 'Your password:  ' . $result['password']);
                $this->response['code'] = true;
            }          
            else {
                $this->response['code'] = false;
                $this->response['error']  = "User isn`t exists!";
            }
        }

        public function get_image($login) {

        
            $command = $this->connection->connection->query("SELECT photo FROM users WHERE login=\"$login\";"); 
            $result = $command->fetch(PDO::FETCH_ASSOC);
            
            return ($result == null) ? 'https://www.joispot.com/assets/img/user.jpg' : $result['photo'];
        }

        public function signin() {

            $this->response['action'] = 'signin';
            if ($this->connection->getConnectionStatus()) {
                
                $command = $this->connection->connection->query("SELECT password, photo FROM users WHERE login=\"$this->login\";"); 
                $result = $command->fetch(PDO::FETCH_ASSOC);
                
                if ($result == null) {
                    $this->response['code'] = false;
                    $this->response['error'] = 'User with this login isn`t exists';
                    return;
                } 
                else {
                    if ($result['password'] != $this->password) {
                        $this->response['code'] = false;
                        $this->response['error'] = 'Incorrect password';   
                        return;             
                    }
                }
                $this->response['code'] = true;
                $this->response['data'] = Array('login' => $this->login, 'photo' => $result['photo']);
            }          
        }

        public function save() {
            
            $this->response['action'] = 'signup';
            if ($this->connection->getConnectionStatus()) {
                

                $command = $this->connection->connection->query("SELECT * FROM users WHERE login=\"$this->login\";"); 
                $result = $command->fetch(PDO::FETCH_ASSOC);
                if ($result != null) {
                    $this->response['code'] = false;
                    $this->response['error'] = 'User with this login already exists';   
                    return;              
                } 
                $command = $this->connection->connection->query("SELECT * FROM users WHERE email=\"$this->email\";"); 
                $result = $command->fetch(PDO::FETCH_ASSOC);
                if ($result != null) {
                    $this->response['code'] = false;
                    $this->response['error'] = 'User with this e-mail already exists';
                    return;
                }
                if ($this->photo != null)
                    $sql = 'INSERT INTO users(login, password, email, photo) VALUES ("' . $this->login . '","' . $this->password . '","' . $this->email . '","' . $this->photo . '");';
                else
                    $sql = 'INSERT INTO users(login, password, email) VALUES ("' . $this->login . '","' . $this->password . '","' . $this->email . '");';

      
                $this->connection->connection->query($sql);
                $this->response['code'] = true;
            }        
        }
        
        
    }    


    
?>