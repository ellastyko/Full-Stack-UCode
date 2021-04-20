<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Battle</title>

</head>

<body>

    <div class="battle_form" method="post">

        <div class="opponent_side">

            <div class="player_info">

                <span class="player_login">BOT</span>
                <span>Mana: <span id="opponent_mana">12</span></span>
                <span>HP: <span id="opponent_hp">1000</span></span>
                <img class="battle_user_image" src='https://www.internetandtechnologylaw.com/files/2019/06/iStock-872962368-chat-bots.jpg'>

            </div>


            <div class="opponent_cards">

                

            </div>

        </div>

        <div class="board">

            <div class="opponent_board">
            

            
            </div>

            <div class="block">

                <div class="turn"></div>
                <span><div class="timer"></div></span>
                
            </div>

            <div class="player_board">
            


            </div>

        </div>

        <div class="player_side">

            <div class="player_info">

                <span id='you-name' class="player_login">{username}</span>
                <span>Mana: <span id="player_mana">12</span></span>
                <span>HP: <span id="player_hp">1000</span></span>
                <img id='you-img' class="battle_user_image" src='{userimgurl}'>

            </div>

            <div class="player_cards">


            </div>

        </div>


        <div class="buttons battle_buttons">

            <input class="goto_userinfo_button button" id="goto_userinfo_button" type="button" value="Leave">
            <input class="endturn_button button" id="endturn_button" type="button" value="Turn" onclick="resetTimer()">

        </div>

    </div>

</body>

</html>
