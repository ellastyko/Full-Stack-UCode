<?php
    class Game {

        public $party = Array();
        public $process;
        public $response;
       

        public function __construct($player1, $player2) {

            $this->player1['login'] = $player1;
            $this->player2['login'] = $player2;
        }

        public function init($login, $socket) {

            if ($login == $this->player1['login']) {
                $this->player1['socket'] = $socket;
                return true;
            }
            else if  ($login == $this->player1['login']) {
                $this->player2['socket'] = $socket;
                return true;
            } 
            return false;        
        }

        public function play() {

            return $this->response;
        }


        public function giveup($who_giveup) {

            if ($this->player1['login'] == $who_giveup) {
                $obj = Array('action' => 'leave', 'code' => true);
                $this->player2['socket']->send(json_encode($obj));
            }
            if ($this->player2['login'] == $who_giveup) {
                $obj = Array('action' => 'leave', 'code' => true);
                $this->player1['socket']->send(json_encode($obj));
            }
        }
    }


?>