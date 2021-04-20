ws.onopen = function(e) {
    console.log("Соединение установлено");
  };

window.localStorage.setItem('data', "");
window.localStorage.setItem('game', "");

document.querySelector('#signin_button').onclick = () => {

    document.location.href = '/client/signin';
}

document.querySelector('#signup_button').onclick = () => {

    document.location = '/client/signup';
}

document.querySelector('#remindpswd_button').onclick = () => {

    document.location = '/client/restore';
}

function handler(response) {
    console.log('user')
}