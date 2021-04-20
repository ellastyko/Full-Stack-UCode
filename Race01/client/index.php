<link rel="stylesheet" href="./styles/main_objs.css">
<link rel="stylesheet" href="./styles/style.css">
<link rel="stylesheet" href="./styles/game.css">

<?php

    $routes = [
      'client' => 'templates/main.php',
      'index.php' => 'templates/main.php',
      'main' => 'templates/main.php',
      'signin' => 'templates/signin.php',
      'signup' => 'templates/signup.php',
      'restore' => 'templates/restore.php',
      'game' => 'templates/game.php',
      'user' => 'templates/user.php',
      'cards' => 'templates/cards.php'
    ];
    
    $request_url = rtrim(ltrim(urldecode(parse_url($_SERVER['REQUEST_URI'],5)), '/'), '/');
    $params = array_filter(explode("/", $request_url)); 

    $url = $params[count($params) - 1];

    switch($url) {

        case 'signin': $js_src = 'signin'; break;
        case 'signup': $js_src = 'signup'; break;
        case 'restore': $js_src = 'restore'; break;
        case 'game': $js_src = 'game'; break;
        case 'user': $js_src = 'user'; break;
        default: $js_src = 'main';
    }
    if (isset($routes[$url])) {

       require_once(__DIR__. "/". $routes[$url]);

    } else {

        echo $routes[$url];

        require_once(__DIR__."/client/templates/404.php");
    }
?>


<script src="./js/connection.js"></script>
<script src="./js/<?php echo $js_src; ?>.js"></script>
