// if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//     document.cookie = `mana=1`;
// } 

let info = JSON.parse(window.localStorage.getItem('data'));

ws.onopen = function(e) {
    console.log("Соединение установлено");
};

document.querySelector('#you-name').innerHTML = info.data.login;
document.querySelector('#you-img').src = info.data.photo;

function handler(response) {
    
    console.log(response);
}


var CARDS = {

    'Iron-Man' : "<section id=\"1\" class=\"Iron-Man game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">4</b></legend>\
                            <img class=\"card_image\" src=\"https://upload.wikimedia.org/wikipedia/uk/1/16/%D0%97%D0%B0%D0%BB%D1%96%D0%B7%D0%BD%D0%B0_%D0%BB%D1%8E%D0%B4%D0%B8%D0%BD%D0%B0_%D0%9A%D0%92%D0%9C.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Iron-Man</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">85</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">90</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",
    
    'Spider-Man' : "<section id=\"2\" class=\"Spider-Man game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">3</b></legend>\
                            <img class=\"card_image\" src=\"/client/images/Spider_man.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Spider-Man</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">75</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">80</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Super-Man' : "<section id=\"3\" class=\"Super-Man game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">6</b></legend>\
                            <img class=\"card_image\" src=\"/client/images/Superman.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Super-Man</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">100</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">100</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Thor' : "<section id=\"4\" class=\"Thor game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">5</b></legend>\
                            <img class=\"card_image\" src=\"https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/2013/ThorDarkWorld_2194942100-TDW0NNG1._V362444527_SX1080_.jpg\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Thor</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">90</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">90</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Hulk' : "<section id=\"5\" class=\"Hulk game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">4</b></legend>\
                            <img class=\"card_image\" src=\"/client/images/Hulk.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Hulk</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">90</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">75</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Captain-Marvel' : "<section id=\"6\" class=\"Captain-Marvel game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">6</b></legend>\
                            <img class=\"card_image\" src=\"/client/images/woman-potogonist.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Captain-Marvel</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">100</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">100</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Thanos' : "<section id=\"7\" class=\"Thanos game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">6</b></legend>\
                            <img class=\"card_image\" src=\"/client/images/Thanos.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Thanos</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">100</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">100</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Black-Panther' : "<section id=\"8\" class=\"Black-Panther game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">2</b></legend>\
                            <img class=\"card_image\" src=\"/client/images/Black_Panther.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Black-Panther</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">70</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">60</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Deadpool' : "<section id=\"9\" class=\"Deadpool game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">4</b></legend>\
                            <img class=\"card_image\" src=\"https://pngimg.com/uploads/deadpool/deadpool_PNG95.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Deadpool</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">60</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">10</span>0</span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Blade' : "<section id=\"10\" class=\"Blade game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">2</b></legend>\
                            <img class=\"card_image\" src=\"/client/images/Blade.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Blade</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">75</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">60</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Bishop' : "<section id=\"11\" class=\"Bishop game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">4</b></legend>\
                            <img class=\"card_image\" src=\"https://upload.wikimedia.org/wikipedia/en/3/32/Lucas_Bishop_X-Men.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Bishop</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">90</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">50</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Callisto' : "<section id=\"12\" class=\"Callisto game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">3</b></legend>\
                            <img class=\"card_image\" src=\"/client/images/Callisto.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Unknown</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">75</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">70</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Magneto' : "<section id=\"13\" class=\"Magneto game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">3</b></legend>\
                            <img class=\"card_image\" src=\"/client/images/Magneto.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Magneto</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">85</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">55</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Ant-Man' : "<section id=\"14\" class=\"Ant-Man game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">2</b></legend>\
                            <img class=\"card_image\" src=\"/client/images/Ant-Man.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Ant-Man</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">70</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">60</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Daredevil' : "<section id=\"15\" class=\"Daredevil game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">1</b></legend>\
                            <img class=\"card_image\" src=\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/820ad535-c310-4704-a9bc-eecf26bba444/d9zf42m-62987101-c7be-443e-9bb9-b0fbfdd3a5bf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODIwYWQ1MzUtYzMxMC00NzA0LWE5YmMtZWVjZjI2YmJhNDQ0XC9kOXpmNDJtLTYyOTg3MTAxLWM3YmUtNDQzZS05YmI5LWIwZmJmZGQzYTViZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.BwNUgX9d-3_UOVqQxQtYAAURimZtw-Gkqkpwa7NDB3E\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Daredevil</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">55</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">45</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Black-Bolt' : "<section id=\"16\" class=\"Black-Bolt game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">3</b></legend>\
                            <img class=\"card_image\" src=\"/client/images/Black_Bolt.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Black-Bolt</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">45</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">85</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Domino' : "<section id=\"17\" class=\"Domino game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">2</b></legend>\
                            <img class=\"card_image\" src=\"https://www.pngkey.com/png/full/234-2349678_domino-marvel-domino-x-force.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Domino</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">65</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">50</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Elektra' : "<section id=\"18\" class=\"Elektra game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">1</b></legend>\
                            <img class=\"card_image\" src=\"https://static.wikia.nocookie.net/vsbattles/images/4/49/Elektra_render2.png/revision/latest?cb=20180219205852\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Elektra</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">65</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">30</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Captain-America' : "<section id=\"19\" class=\"Captain-America game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">5</b></legend>\
                            <img class=\"card_image\" src=\"/client/images/Captain-America.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Captain-America</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">85</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">95</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Black-Widow' : "<section id=\"20\" class=\"Black-Widow game_card\">\
                    <div class=\"player_card_main card_main--epic\">\
                        <fieldset>\
                            <legend id=\"hexagon\"><b id=\"card_cost\">1</b></legend>\
                            <img class=\"card_image\" src=\"https://i.pinimg.com/originals/68/2b/04/682b04cc22f2b09d09c5edb42bb1fbd6.png\">\
                        </fieldset>\
                        <div class=\"card_footer\">\
                            <span class=\"card_name\">Black-Widow</span>\
                            <div class=\"card_characteristics\">\
                                <span class=\"attack\">attack:<span id=\"attack\">60</span></span>\
                                <span class=\"armor\">armor:<span id=\"defense\">50</span></span>\
                            </div>\
                        </div>\
                    </div>\
                </section>",

    'Opponent-Card' : "<section id=\"21\" class=\"Opponent-Card game_card\">\
        <div class=\"player_card_main card_main--epic\">\
            <fieldset>\
                <legend id=\"hexagon\"><b id=\"card_cost\">?</b></legend>\
                <img class=\"card_image\" src=\"https://www.clipartmax.com/png/middle/15-151162_homey-ideas-question-mark-clipart-png-images-free-download-ask-if-you.png\">\
            </fieldset>\
            <div class=\"card_footer\">\
                <span class=\"card_name\">Opponent-Card</span>\
                <div class=\"card_characteristics\">\
                    <span class=\"attack\">attack:<span id=\"attack\">?</span></span>\
                    <span class=\"armor\">armor:<span id=\"defense\">?</span></span>\
                </div>\
            </div>\
        </div>\
    </section>"
};




if (window.performance) {
    console.info("window.performance works fine on this browser");
}
  console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.info( "This page is reloaded" );
    document.cookie = `mana=1`;

} else {
    console.info( "This page is not reloaded");
}


document.querySelector('#goto_userinfo_button').onclick = () => {

    document.location = '/client/user';
}


__cards__ = [ 
    ['Iron-Man',85,90, 4],
    ['Spider-Man',75,80,3],
    ['Super-Man',100,100,6],
    ['Thor',100,90,5],
    ['Hulk',90,70,4],
    ['Captain-America',85,95,5],
    ['Captain-Marvel',100,100,6],
    ['Thanos',100,100,6],
    ['Black-Panther',70,60,2],
    ['Deadpool',60,90,3],
    ['Black-Widow',60,50,1],
    ['Blade',75,60,2],
    ['Bishop',90,50,4],
    ['Callisto',75,50,3],
    ['Magneto',85,55.4],
    ['Ant-Man',65,60,2],
    ['Daredevil',45,45,1],
    ['Black-Bolt',45,85.4],
    ['Domino',65,50,2],
    ['Elektra',65,30,1] 
];



class Card {

    constructor(alias, attack, defense, cost) {

        this.alias = alias;
        this.attack = attack;
        this.defense = defense;
        this.cost = cost;
    }
}




class Deck {

    constructor() {

        this.deck = [];
    }

    createDeck(isClient) {

        if(isClient) {
            let i, j, k;
            i = Math.floor(Math.random() * 19);
            do {
                j = Math.floor(Math.random() * 19);
                k = Math.floor(Math.random() * 19);
            }
            while (j == i || i == k || k == j)
            
            
            /* User deck */
            var aliases = [__cards__[i][0], __cards__[j][0], __cards__[k][0]];
            var attacks = [__cards__[i][1], __cards__[j][1], __cards__[k][1]];
            var defenses = [__cards__[i][2], __cards__[j][2], __cards__[k][2]];
            var costs = [__cards__[i][3], __cards__[j][3], __cards__[k][3]];

        } else {

            /* Opponent deck */
            let i, j, k;
            i = Math.floor(Math.random() * 19);
            do {
                j = Math.floor(Math.random() * 19);
                k = Math.floor(Math.random() * 19);
            }
            while (j == i || i == k || k == j)
            /* User deck */
            var aliases = [__cards__[i][0], __cards__[j][0], __cards__[k][0]];
            var attacks = [__cards__[i][1], __cards__[j][1], __cards__[k][1]];
            var defenses = [__cards__[i][2], __cards__[j][2], __cards__[k][2]];
            var costs = [__cards__[i][3], __cards__[j][3], __cards__[k][3]];
        }
        
        for(let i = 0; i < aliases.length; ++i) {

            this.deck.push(new Card(aliases[i], attacks[i], defenses[i], costs[i]));
        }

    }
}

class Hand {

    constructor() {

        this.hand = [];
    }

    createHand(deck) {

        let temp = [];
        for(let i = 0; i < deck.length; ++i) {

            temp.push(deck[i]);
        }

        let location1 = Math.floor(Math.random() * deck.length);
        let location2 = Math.floor(Math.random() * deck.length);

        let tmp = temp[location1];
        temp[location1] = temp[location2];
        temp[location2] = tmp;

        this.hand = temp.slice(0, deck.length / 2);
    }
}

class Player {

    constructor(name) {

        this.playerName = name;
        this.mana = 3;
        this.hp = 500;
        this.playerCards = [];
        this.playerHands = [];
    }
}

class Battle {

    constructor() {

        this.cardsOnOpponentBoard = [];
        this.cardsOnPlayerBoard = [];
        this.players = [];
    }

    /* Initialize players' name, their decks and cards in them */
    init(clientName, opponentName) {

        this.players.push(new Player(clientName));
        this.players.push(new Player(opponentName));

        let clientDeck = new Deck();
        clientDeck.createDeck(true);

        let opponentDeck = new Deck();
        opponentDeck.createDeck(false);
        
        this.players[0].playerCards = clientDeck;
        this.players[1].playerCards = opponentDeck;

        let clientHand = new Hand();
        clientHand.createHand(clientDeck.deck);

        let opponentHand = new Hand();
        opponentHand.createHand(opponentDeck);

        this.players[0].playerHands = clientHand;
        this.players[1].playerHands = opponentHand;
    }
}

let battle = new Battle();

battle.init('Player1', 'Player2'); // (client, opponent)
// console.log(battle.players[1].playerCards.deck)

/* Timer */


let timer_count = 10; // MAIN TIME
let op_mana_num = document.getElementById('opponent_mana').innerHTML;
let pl_mana_num = document.getElementById('player_mana').innerHTML;
let flag = 1;
let turn = '';


let oppo_board = document.querySelector('.opponent_board');

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function resetTimer() {

    timer_count = 10;

    flag *= -1;

    if(op_mana_num < 6 || pl_mana_num < 6) {

        op_mana_num++;
        pl_mana_num++;
        battle.players[0].mana++;
        document.cookie = `mana=${battle.players[0].mana}`;

        console.log('cookie: '+getCookie('mana'))

        document.getElementById('opponent_mana').innerHTML = op_mana_num;
        document.getElementById('player_mana').innerHTML = pl_mana_num;
    }
}


let I = 0;
let OOO = 0;
let opponent_hp = document.querySelector('#opponent_hp'); let player_hp = document.querySelector('#player_hp');
let inter = setInterval(() => {
    let o = Number(o_mana.textContent);
    let y = Number(y_mana.textContent);
    o+=0.1;
    y+=0.1;
    o_mana.innerHTML = Number(o).toFixed(1);
    y_mana.innerHTML = Number(y).toFixed(1);
    if(flag < 0){
        if (OOO == 0) {
            OOO++;
            setTimeout(() => {
                if (I == 3) {
                    clearInterval(inter)
                    if (Number(player_hp.textContent) > Number(opponent_hp.textContent)) {
                        document.querySelector(".timer").innerHTML = "You won!"
                    }
                    else {
                        document.querySelector(".timer").innerHTML = "You lost!"
                    }           
                }
                
                o_mana.innerHTML = Number(o_mana.textContent) - battle.players[1].playerCards.deck[I].cost;
                opponent_cards.removeChild(opponent_cards.lastElementChild);
                oppo_board.innerHTML = CARDS[battle.players[1].playerCards.deck[I].alias]
                let res = (battle.players[0].playerCards.deck[I].attack + battle.players[0].playerCards.deck[I].defense) - (battle.players[1].playerCards.deck[I].attack + battle.players[1].playerCards.deck[I].defense);
  
                I++; 
                setTimeout(() => {  
                    
                    console.log(res)
                    if (res < 0) {
                        player_hp.innerHTML = Number(player_hp.textContent) - Math.abs(res);
                    }
                    else {
                        opponent_hp.innerHTML = Number(player_hp.textContent) - res;    
                    }
                    
                    oppo_board.innerHTML = "";
                    player_field.innerHTML = "";
                    flag *= -1;
                    timer_count = 10;
                    
                }, 3000);
            }, 1000)
        }     
        turn = "Opponent's turn";      
    }

    if(flag > 0) {
        OOO = 0;
        turn = "Your turn";
    }

    timer_count--;

    if(timer_count == 0) {

        timer_count = 10;
        flag *= -1;

        if(op_mana_num < 10 || pl_mana_num < 10) {

            op_mana_num+=1;
            pl_mana_num+=1;
            battle.players[0].mana++;
            document.cookie = `mana=${battle.players[0].mana}`;

            console.log('cookie: '+getCookie('mana'))

            document.getElementById('opponent_mana').innerHTML = op_mana_num;
            document.getElementById('player_mana').innerHTML = pl_mana_num;
        }



        return timer_count;
    }
    document.querySelector(".turn").innerHTML = turn;

    document.querySelector(".timer").innerHTML = timer_count;
}, 1000)


/* Cards */

const player_cards = document.querySelector(".player_side .player_cards");

console.log(battle.players[0].playerCards.deck[1].alias)

for(let i = 0; i < battle.players[0].playerCards.deck.length; ++i) {

    for(let j in CARDS) {

        if(battle.players[0].playerCards.deck[i].alias == j) {

            player_cards.innerHTML += CARDS[j];

        }
    }
}

const player_field = document.querySelector(".player_board");
const player_card_main = document.querySelectorAll(".player_card_main");

let o_mana = document.getElementById('opponent_mana');
let y_mana = document.getElementById('player_mana');

player_card_main.forEach((card) => {
    
    card.addEventListener("click", (e) => {
        
        if (card.classList.contains('active')){
            
            player_cards.appendChild(card);
            card.classList.remove('active');

            y_mana.innerHTML = Number(y_mana.textContent) + Number(card.querySelector('#card_cost').textContent);
        } else {

            if(flag < 0) {
                return false;
            } else {
                if (Number(y_mana.textContent) < Number(card.querySelector('#card_cost').textContent))  
                    return;  
                player_field.appendChild(card);
                card.classList.add('active');
                y_mana.innerHTML = Number(y_mana.textContent) - Number(card.querySelector('#card_cost').textContent);
                return true;
            }         
        }
    })
});

const opponent_cards = document.querySelector(".opponent_cards");

for(let i = 0; i < battle.players[1].playerCards.deck.length; ++i) {

    opponent_cards.innerHTML += CARDS['Opponent-Card'];
}




