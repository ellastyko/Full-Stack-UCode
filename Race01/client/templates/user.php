<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User</title>


</head>

<body>
    
    <form id='log_form' class="loggedin_form" method="post">

        <span class="welcome">Welcome home, {username}!</span>
        <img class="user_image" src='https://www.joispot.com/assets/img/user.jpg'>

        <div class="buttons">
    
            <input class="battle_button button" id="battle_button" type="button" value="Battle!"></input>
            <input class="cards_button button" id="cards_button" type="button" value="View cards"></input>
            <input class="signout_button button" id="signout_button" type="button" value="Sign out"></input>

        </div>
    
    </form>
    <input class="signout_button button" id="STOP_button" type="button" value="STOP SEARCHING" style='background: red; margin: 65% 45%;' hidden></input>
</body>

</html>
