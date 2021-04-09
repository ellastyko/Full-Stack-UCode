<?php 
    session_start();
    require_once('./connection/DatabaseConnection.php');
    require_once('./model/model.php');

    class user extends model {

        public $login;
        public $password;
        public $admin;

        public function error() {
            return $this->error_message;
        }
        
        public function __construct() {
            parent::__construct();        
        }

        public function __destruct() {
            $this->connection = null;
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
    }

 
    if (isset($_POST['submit'])) {

        $form = new user();
        $form->login = $_POST['login'];
        $form->password = $_POST['password'];

        if ($form->signin() == true) {

            echo '<h3>You have signed in successfully!</h3>';
            if ($form->admin == true)
                echo '<p>You are admin!<p>';
            else
                echo '<p>You are usual user!<p>';

            echo "<a href='?action=logout'>Log out</a>";
            $_SESSION['login'] = $form->login;
            $_SESSION['password'] = $form->password;            
        } 
        else {
            echo "<h2>" . $form->error() . "</h2>";
        }
    }
    if (isset($_GET['action'])) {
        
        if ($_GET['action'] == 'logout') {
            unset($_SESSION['login']);
            unset($_SESSION['password']);
            echo file_get_contents("./index.html");  
        }
       
    }
?>