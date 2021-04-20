ws.onopen = function(e) {
    console.log("Соединение установлено");
  };

window.localStorage.setItem('data', "");
window.localStorage.setItem('game', "");

document.querySelector('#mn_form').onsubmit = (e) => {

    e.preventDefault();

    let registrationObj = {
        action: 'signup',
        login : document.querySelector('#login').value,
        password : document.querySelector('#password').value,
        email : document.querySelector('#mail').value,
        photo : document.querySelector('#photo').value     
    }

    ws.send(JSON.stringify(registrationObj));
}

document.querySelector('#goto_main_button').onclick = () => {

    document.location = '/client/main';

}

function checkPassword() {

    let pswd = document.getElementById('password');
    let conf_pswd = document.getElementById('conf_password');

    if(pswd.value.localeCompare(conf_pswd.value)) {

        pswd.style.border = '2px solid red';
        conf_pswd.style.border = '2px solid red';
        document.getElementById('error').innerHTML = 'Incorrect password confirmation';
    } else {

        pswd.style.border = '0';
        conf_pswd.style.border = '0';
        document.getElementById('error').innerHTML = '';
    }

}

function handler(response) {
    if (response.code == true)
        document.location = '/client/signin';
    else    
        console.log(response)
}