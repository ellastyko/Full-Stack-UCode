
let form = document.querySelector('form');
let login = document.querySelector('#login');
let password = document.querySelector('#password');

let arr = Array(login, password);

let spans = form.querySelectorAll('span');



form.onsubmit = (event) => {
        
    spans = form.querySelectorAll('span');
    if (spans !== undefined) {
        for (i of spans)
            form.removeChild(i)
    }
    for (let i of arr) {
        
        if (/[!@#$^&*(/),`'~"%]/.test(i.value)) {

            let elem = document.createElement('span');
            let node = document.createTextNode('Unresolved symbol!');
            elem.appendChild(node)
            i.after(elem)
        }
    }
    if (form.querySelectorAll('span').length != 0) {
        event.preventDefault();
    }
}