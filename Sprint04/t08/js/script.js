let min = new Date();
min.setTime(min.getTime() + 60*1000);

let phone = document.getElementById('phone');
let count = document.getElementById('count');
let replace = document.getElementById('replace');
let winput = document.getElementById('word-input');
let tinput = document.getElementById('input-text');
let note = document.getElementsByClassName('note')[0];

count.counter = 0;
phone.counter = 0;
replace.counter = 0;

let cook_ie = document.getElementsByClassName('b1');
console.log(cook_ie)

for (let i of document.getElementsByClassName('b1')) {

    document.cookie.split(" ").forEach(function (item, index, arr) {
        if (item.includes(i.id)) {
          let number = item.replace(/[^\d]/g, "");
          i.counter = number;
          i.innerHTML = i.innerHTML.replace(/\b\d+\b/gim, number);
        }
      });
    i.addEventListener('click', () => {
        i.counter++;
        i.innerHTML = i.innerHTML.replace(/\b\d+\b/gim, i.counter)
        document.cookie = i.id + "="+i.counter+'; expires=' + min;
    })
}

count.onclick = function() {
    let count = 0;
    let text = tinput.value;
    let word = winput.value;
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    text = text.replace(/\s{2,}/g," ");
    text = text.split(' ');
    text.forEach((i, index, arr)=> {
        if(i == word) {
            count++;
        }
    })
    note.textContent = `Word count [${count}]`;
}


replace.onclick = function() {
    let word = winput.value;
    let text = tinput.value;
    text = text.split(' ');
    for (let i = 0; i < text.length; i++) {
        text[i] = word;
    }
    text = text.join(' ');
    note.textContent = `${text}`
}


phone.onclick = function()  {
    let word = winput.value;
    if (word.length == 10 && word.match(/^\d+$/)) {
        word = word.split('')
        word.splice(3, 0, '-');
        word.splice(7, 0, '-');
        word = word.join('')
        note.textContent = `${word}`
    }
    else {
        note.textContent = `Invalid phone number`;
    }
}
