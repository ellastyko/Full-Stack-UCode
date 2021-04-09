<?php 
    session_start();
    require_once('./connection/DatabaseConnection.php');
    require_once('./model/model.php');

    class user extends model {

        public $login;
        public $password;
        public $admin;
        public $email;

        public function error() {
            return $this->error_message;
        }
        
        public function __construct() {
            parent::__construct();        
        }

        public function __destruct() {
            $this->connection = null;
        }

        public function restore() {


            $command = $this->connection->connection->query("SELECT password, email FROM users WHERE login=\"$this->login\";"); 
            $result = $command->fetch(PDO::FETCH_ASSOC);
            if ($result != null) {

                echo "<h3>Password sended on your e-mail</h3>";
                mail($result['email'], 'Restore password', 'Your password:  ' . $result['password']);
            }          
            else
                echo "<h3>User isn`t exists!</h3>";
        }
    }

    
    if (isset($_POST['submit'])) {

        $form = new user();
        $form->login = $_POST['login'];
        $form->restore();
    }
    
?>