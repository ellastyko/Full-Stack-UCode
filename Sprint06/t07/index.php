<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>  
    <p><?php echo "a name of file of the executed script: ". $_SERVER['PHP_SELF'];?></p>
    <p><?php echo "arguments passed to the script: ". $_SERVER['argv'];?></p>
    <p><?php echo "IP address of the server: ". $_SERVER['SERVER_ADDR'];?></p>
    <p><?php echo "a name of host that invoke current script: ". $_SERVER['SERVER_NAME'];?></p>
    <p><?php echo "a name and a version of the information protocol: ". $_SERVER['SERVER_PROTOCOL'];?></p>
    <p><?php echo "a query method: ". $_SERVER['QUERY_STRING']?></p>
    <p><?php echo "User-Agent information: ". $_SERVER['HTTP_USER_AGENT'];?></p>
    <p><?php echo "IP address of the client: ". $_SERVER['REMOTE_ADDR'];?></p>
    <p><?php echo "a list of parameters passed by URL: ". $_SERVER['PATH_INFO'];?></p>
</body>
</html>