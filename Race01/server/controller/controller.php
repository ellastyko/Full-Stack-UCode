<?php

    require_once (__DIR__ . '/../server.php');
    
    
   
    class Controller {

        public $request;
        public $socket;
        public $obj;

        
        public function __construct(string $string, $connection) {

            $this->request = json_decode($string, true);  
            $this->socket = $connection;
        }


        public function handler() {

            $this->obj = new Model();
           


            if ($this->request['action'] == 'init') {

                $res = $GAMES[$this->request['game']]->init($this->request['socket'], $this->socket);
                return Array('action' => 'init', 'code' => $res);
            }
            else if ($this->request['action'] == 'play') {
                try {
                    $GAMES[$this->request['game']]->play();
                }
                catch (Exception $e) {
                    echo "Caught exception: " . $e . "\n";
                }             
            }
            else if ($this->request['action'] == 'search') {

                         
                    if ($SEARCH['login'] != '') {
          
                        echo "\nI AM" . $this->request['login'] . "\n";
                        echo "\nUSER " . $SEARCH['login'] . " ALREADY IN MASSIVE" . "\n";
                        if ($SEARCH['login'] == $this->request['login'])
                            return Array('action' => 'search', 'code' => false, 'status' => 'research');

                        // Добавление игры
                        $game = md5($this->request['login']);
                        $GAMES[$game] = new Game($this->request['login'], $SEARCH['login']);
                        
                        
                        // отправляем свое имя сопернику и объект класса игры
                        $SEARCH['socket']->send(json_encode(Array('action' => 'search','code' => true, 'enemy' => $this->request['login'], 'enemy-img' => $this->obj->get_image($this->request['login']), 'game' => $game)));

                        // Отправляем себе имя соперника и объект класса игры
                        $res = Array('action' => 'search', 'code' => true, 'enemy' => $SEARCH['login'], 'enemy-img' => $this->obj->get_image($SEARCH['login']), 'game' => $game);


                        $SEARCH['login'] = '';
                        $SEARCH['socket'] = '';
                        return $res;
                    }
                    else {
                        
                        $SEARCH['login'] = $this->request['login'];
                        $SEARCH['socket'] = $this->socket;
                        echo "USER " . $this->request['login'] . " WRITTEN IM MASSIVE" . "\n";
                        return Array('action' => 'search', 'code' => false, 'status' => 'searching');
                    }
                
            }
            else if ($this->request['action'] == 'leave') {
                
                echo "\nUSER " . $this->request['login'] . " LEFTED GAME\n";
                $GAMES[$this->request['game']]->giveup($this->request['login']);
                unset($GAMES[$this->request['game']]);
                return Array('action' => 'leave', 'code' => false);
            }
            else if ($this->request['action'] == 'stop_search') {

                if (!isset($SEARCH['login']))
                    return Array('action' => 'stop_search', 'code' => false);
                if ($SEARCH['login'] == $this->request['login']) {

                    $SEARCH['login'] = '';
                    $SEARCH['socket'] = '';
                    return Array('action' => 'stop_search', 'code' => true);
                }                  
                else  {
                    return Array('action' => 'stop_search', 'code' => false);
                }                  
            }
            else { 
                
                if ($this->request['action'] == 'signin') {

                    $this->obj->login = $this->request['login'];
                    $this->obj->password = $this->request['password'];
                    $this->obj->signin();
                }
                if ($this->request['action'] == 'signup') {

                    $this->obj->login = $this->request['login'];
                    $this->obj->password = $this->request['password'];
                    $this->obj->email = $this->request['email'];
                    $this->obj->photo = $this->request['photo'];
                    $this->obj->save();
                }
                if ($this->request['action'] == 'restore') {

                    $this->obj->login = $this->request['login'];
                    $this->obj->restore();
                }              
            }
            return $this->obj->response;       
        }
    }