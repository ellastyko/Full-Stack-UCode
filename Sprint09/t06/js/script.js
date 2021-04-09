
let form = document.querySelector('#reg');
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let cpassword = document.querySelector('#cpassword');
let fullname = document.querySelector('#fullname');
let email = document.querySelector('#email');

let arr = Array(login, password, cpassword, fullname, email);


form.onsubmit = (event) => {
        
    spans = form.querySelectorAll('span');
    if (spans !== undefined) {
        for (i of spans)
            form.removeChild(i)
    }
    for (let i of arr) {
        if (/[!@#$^&*(/),`'~"%]/.test(i.value)) {
            
            if (!/[!#$^&*(/),`'~"%]/.test(i.value) && i.type === 'email') 
                break;
            let elem = document.createElement('span');
            let node = document.createTextNode('Unresolved symbol!');
            elem.appendChild(node)
            i.after(elem)
        }
    }
    if (password.value != cpassword.value) {

        let elem = document.createElement('span');
        let node = document.createTextNode('Passwords are different!');
        elem.appendChild(node)
        cpassword.after(elem)
    }
    if (form.querySelectorAll('span').length != 0) {
        event.preventDefault();
    }
}



