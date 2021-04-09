<?php
    require_once(__DIR__ . '/../view/View.php');
    require_once(__DIR__ . '/lwlje.php');


    class Main implements ControllerInterface {

        public $view;

        public function __construct() {

            $this->view = new View(__DIR__ .'/../view/templates/main.html');
        }

        public function execute() {

            $this->view->render();
        }
    }


    $main = new Main();
    $main->execute();