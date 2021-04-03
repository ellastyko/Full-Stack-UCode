<?php
    $count = $_COOKIE['reload'];
    if ($count == null) {
        $count = 0;
    }
    else {
        $count++;
    }
    setcookie("reload", $count, time() + 60);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Cookie counter</h1>
    <p><?php echo "This page was reloaded $count time(s) in last minute"; ?></p>
</body>
</html>