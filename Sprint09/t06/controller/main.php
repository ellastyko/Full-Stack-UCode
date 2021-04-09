
<?php 
    include(__DIR__ . '/../connection/DatabaseConnection.php');
    include(__DIR__ . '/../model/Model.php');
    include(__DIR__ . '/../view/View.php');

    class controller {

        public function __construct($template) {

            $this->view = new View(__DIR__ ."/../view/templates/$template.html");
        }

        public function execute() {

            $this->view->render();
        }
    }
    

    if (isset($_GET['act'])) {

        if ($_GET['act'] == 'reg') {
            $obj = new controller('signup');
            $obj->execute();
        }
        elseif ($_GET['act'] == 'signin') {
            $obj = new controller('signin');
            $obj->execute();
        }
        elseif ($_GET['act'] == 'restore') {
            $obj = new controller('restore');
            $obj->execute();
        }
    }
    elseif ($_POST['reg']) {

        $obj = new Model();
        $obj->login = $_POST['login'];
        $obj->password = $_POST['password'];
        $obj->fullname = $_POST['fullname'];
        $obj->email = $_POST['email'];        
        if ($obj->save() == true) {

            echo "<h3>Successful registration!</h3>";
            echo "<a class='ref' href='?act=signin'>Sign in?</a>";
        }
        else {
            echo "<h3>" . $obj->error() . "</h3>";
            echo "<a class='ref' href='?act=reg'>Restart registration</a>";
        }
    }
    elseif ($_POST['signin']) {

        $obj = new Model();
        $obj->login = $_POST['login'];
        $obj->password = $_POST['password'];

        if ($obj->signin() == true) {

            echo '<h3>You have signed in successfully!</h3>';
            if ($obj->admin == true)
                echo '<h4>You are admin!</h4>';
            else 
                echo '<h4>You are usual user!</h4>';

            echo "<a class='ref' href='?act=signin'>Log out</a>";
        }
        else {
            echo "<h3>" . $obj->error() . "</h3>";
            if ($obj->error() == 'Incorrect password')
                echo "<a class='ref' href='?act=restore'>Restore password</a>";
            else
                echo "<a class='ref' href='?act=signin'>Back to sign in</a>";
        }
    }
    elseif ($_POST['restore']) {

        $obj = new Model();
        $obj->login = $_POST['login'];
        if ($obj->restore() == true) 
            echo "<h3>Password sended on your e-mail</h3>";
        echo "<a class='ref' href='?act=signin'>Back to sign in</a>";
    }
    else {
        $obj = new controller('main');
        $obj->execute();
    }
?>
<script src='../js/script.js'></script>
<link rel="stylesheet" href="../css/style.css">

