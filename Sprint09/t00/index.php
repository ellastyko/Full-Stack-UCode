<?php 
    include('./connection/DatabaseConnection.php');
    include('./model/Model.php');

    class user extends Model {

        private $login;
        private $password;
        private $fullname;
        private $email;

        public function error() {
            return $this->error_message;
        }
        
        public function __construct($login, $password, $fullname, $email) {
            $this->login = $login;
            $this->password = $password;
            $this->fullname = $fullname;
            $this->email = $email;
            parent::__construct();        
        }

        public function __destruct() {
            $this->connection = null;
        }

        public function valid() {

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
                return true;
            }          
            return false;
        }


        public function save() {
    
            if ($this->connection->getConnectionStatus()) {

                $sql = 'INSERT INTO users(login, password, fullname, email) VALUES ("' . $this->login . '","' . $this->password . '","' . $this->fullname . '","' . $this->email . '");';

      
                $this->connection->connection->query($sql);
                echo "Successful registration!\n";                
            }        
        }
        
    }

 
    if (isset($_POST['submit'])) {

        $form = new user($_POST['login'], $_POST['password'], $_POST['fullname'], $_POST['email']);
        if ($form->valid() == true) {
            $form->save();
        }   
        else {
            echo $form->error();
        }
    }
?>