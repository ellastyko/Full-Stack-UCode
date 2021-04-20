<?php
    session_start();
    require_once (__DIR__ . '/models/Model.php');
    require_once (__DIR__ . '/models/Game.php');
    require_once (__DIR__ . '/websockets/vendor/autoload.php');

    // cd Desktop/Stage3/Race01/server/
    
    $GAMES = Array();
    $SEARCH = Array();

    $ADDR = '10.11.6.7';
    $PORT = 34345;

    use Workerman\Worker; 

    // Create a Websocket server
   $ws = new Worker("websocket://$ADDR:$PORT");

    // 4 processes
   $ws->count = 6;

    // Emitted when new connection come
   $ws->onConnect = function ($connection) {
        echo "New connection\n";
    };

    // Emitted when data received
   $ws->onMessage = function ($connection, $data) {
        
        // CONTROLLER
        $request = json_decode($data, true);

        global $GAMES;
        global $SEARCH;
        $obj = new Model();

        if ($request['action'] == 'init') {

            $res = $GAMES[$request['game']]->init($request['socket'], $connection);
            return Array('action' => 'init', 'code' => $res);
        }
        else if ($request['action'] == 'play') {
            try {
                $GAMES[$request['game']]->play();
            }
            catch (Exception $e) {
                echo "Caught exception: " . $e . "\n";
            }             
        }
        else if ($request['action'] == 'search') {
            $response = search($request, $obj, $connection);             
        }
        else if ($request['action'] == 'leave') {
            if (isset($GAMES[$request['game']])) {
                echo "\nUSER " . $request['login'] . " LEFTED GAME\n";
                $GAMES[$request['game']]->giveup($request['login']);
                unset($GAMES[$request['game']]);              
            }      
            $response = Array('action' => 'leave', 'code' => false);
        }
        else if ($request['action'] == 'stop_search') {

            if (!isset($SEARCH['login']))
                $response = Array('action' => 'stop_search', 'code' => false);
            else if ($SEARCH['login'] == $this->request['login']) {

                $SEARCH['login'] = '';
                $SEARCH['socket'] = '';
                $response = Array('action' => 'stop_search', 'code' => true);
            }                  
            else  {
                $response = Array('action' => 'stop_search', 'code' => false);
            }                  
        }
        else { 
            
            if ($request['action'] == 'signin') {

                $obj->login = $request['login'];
                $obj->password = $request['password'];
                $obj->signin();
            }
            else if ($request['action'] == 'signup') {

                $obj->login = $request['login'];
                $obj->password = $request['password'];
                $obj->email = $request['email'];
                $obj->photo = $request['photo'];
                $obj->save();
            }
            else if ($request['action'] == 'restore') {

                $obj->login = $request['login'];
                $obj->restore();
            }      
            $response = $obj->response;              
        }
          
        // echo $response;
        $connection->send(json_encode($response));
    };

    // Emitted when connection closed
   $ws->onClose = function ($connection) {
        
    };
    
    function search($request, $obj, $connection) {

        global $GAMES;
        global $SEARCH;
        // if (isset($SEARCH['login'])) {
      
        //     echo "\nI AM" . $request['login'] . "\n";
        //     echo "\nUSER " . $SEARCH['login'] . " ALREADY IN MASSIVE" . "\n";
        //     if ($SEARCH['login'] == $request['login'])
        //         return Array('action' => 'search', 'code' => false, 'status' => 'research');

        //     // Добавление игры
        //     $game = md5($request['login']);
        //     $GAMES[$game] = new Game($request['login'], $SEARCH['login']);
            
            
        //     // отправляем свое имя сопернику и объект класса игры
        //     $SEARCH['socket']->send(json_encode(Array('action' => 'search','code' => true, 'enemy' => $request['login'], 'enemy-img' => $obj->get_image($request['login']), 'game' => $game)));

        //     // Отправляем себе имя соперника и объект класса игры
        //     $res = Array('action' => 'search', 'code' => true, 'enemy' => $SEARCH['login'], 'enemy-img' => $obj->get_image($SEARCH['login']), 'game' => $game);


        //     $SEARCH['login'] = '';
        //     $SEARCH['socket'] = '';
        //     return $res;
        // }
        // else {
            
        //     $SEARCH['login'] = $request['login'];
        //     $SEARCH['socket'] = $connection;
        //     echo "USER " . $request['login'] . " WRITTEN IN MASSIVE" . "\n";
        //     return Array('action' => 'search', 'code' => false, 'status' => 'searching');
        // }
    }


    // Run worker
    Worker::runAll();