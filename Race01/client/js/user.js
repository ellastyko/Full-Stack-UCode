ws.onopen = function(e) {
    console.log("Соединение установлено");
};

let info = JSON.parse(window.localStorage.getItem('data'));


let stop_searching = {
    action: 'stop_search',
    login: info.data.login
}


document.querySelector('#signout_button').onclick = () => {
    document.location = '/client/main';
}

document.querySelector('#cards_button').onclick = () => {
    document.location = '/client/cards';
}

document.querySelector('#battle_button').onclick = () => {
    // let obj = {
    //     action: 'search',
    //     login: info.data.login
    // }
    // ws.send(JSON.stringify(obj)) 
    document.location = '/client/game';
}

let form = document.querySelector('#log_form');

document.querySelector('.welcome').innerHTML = info.data.login;

document.querySelector('.user_image').src = `${info.data.photo}`;

// let stop = document.querySelector('#STOP_button')

// stop.onclick = () => {

//     ws.send(JSON.stringify(stop_searching));
// }



function handler(response) {
    
    console.log(response);
    // if (response.action == 'stop_search') {
    //     if (response.code == true) {
    //         document.body.className = "";
    //         stop.hidden = true;
    //         form.style.visibility = 'visible';
    //         return;
    //     }
    //     return;
    // }   
    // if (response.action == 'search') {

    //     if (response.code == true) {
    
    //         window.localStorage.setItem('game', JSON.stringify(response))
    //         document.body.className = "";
    //         stop.hidden = true;
    //         form.style.visibility = 'visible';
    //         document.location = '/client/game';   
    //     }
    // }
}
