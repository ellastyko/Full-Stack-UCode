ws.onopen = function(e) {
    console.log("Соединение установлено");
  };

window.localStorage.setItem('data', "");
window.localStorage.setItem('game', "");

document.querySelector('#mn_form').onsubmit = (e) => {

    
    let loginObj = {
        action: 'signin',
        login : document.querySelector('#login').value,
        password : document.querySelector('#password').value,
    }
    ws.send(JSON.stringify(loginObj));
}

document.querySelector('#goto_main_button').onclick = () => {

    document.location = '/client/main';
}

function handler(response) {

    if (response.code == true)     {

        window.localStorage.setItem('data', JSON.stringify(response));
        
        document.location = '/client/user';
    }       
    else {
        alert(response.error)
    }
}