ws.onopen = function(e) {
    console.log("Соединение установлено");
  };

window.localStorage.setItem('data', "");
window.localStorage.setItem('game', "");

document.querySelector('#remindpswd_button').onclick = (e) => {

    let remindPasswordObj = {
        action: 'restore',
        login : document.querySelector('#login').value
    }

    ws.send(JSON.stringify(remindPasswordObj));
}

document.querySelector('#goto_main_button').onclick = () => {

    document.location = '/client/main';

}

function handler(response) {

    if (response.code == true)
        setTimeout(() => {
            document.location = '/client/main';
        }, 3000)      
    else
        alert("Undefined error!")
}