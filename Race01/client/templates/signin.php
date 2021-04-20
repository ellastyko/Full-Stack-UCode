<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

</head>

<body>

    <form id='mn_form' name="signin" class="main_form" method="post">

        <span>Login</span>
        <input type="text" id="login" required></input>

        <span>Password</span>
        <input type="password" id="password" required></input>

        <span id="error" class="error"></span>

        <div class="buttons">

            <input class="clear_button button" id="clear_button" type="reset" value="Clear">
            <input class="signin_button button" id="signin_button" type="submit" value="Sign In"></input>
            <input class="goto_main_button button" id="goto_main_button" type="button" value="Go to Main">

        </div>


    </form>

</body>

</html>