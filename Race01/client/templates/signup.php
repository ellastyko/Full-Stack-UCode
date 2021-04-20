<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>

<body>

    <form id="mn_form" name="signup" class="main_form" method="post">

        <span>Login</span>
        <input type="text" id="login" required></input>

        <span>Password</span>
        <input id="password" type="password" id="password" required></input>

        <span>Confirm Password</span>
        <input id="conf_password" type="password" id="confirm_password" required onchange="checkPassword()"></input>

        <span>Photo (URL)</span>
        <input type="url" id="photo"></input>

        <span>E-mail</span>
        <input type="email" id="mail" required></input>

        <span id="error"></span>
        <span id="table_error"></span>
        <span id="success_add"></span>

        <div class="buttons">

            <input class="clear_button button" id="clear_button" type="reset" value="Clear">
            <input class="signup_button button" id="signup_button" type="submit" value="Sign Up"></input>
            <input class="goto_main_button button" id="goto_main_button" type="button" value="Go to Main">

        </div>

    </form>

</body>

</html>