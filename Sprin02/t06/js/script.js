
do {
    status = 0
    let name = prompt('Enter name: ')
    let n = name
    for (let i = 0; i < name.length; i++){
        
        name[i] = Number.parseInt(name[i]);
        if (!isNaN(name[i]) && name[i] != ' ') {
        
            console.log(name[i]);
            alert('invalid symbol!')
            console.log('invalid symbol!')
            status = 1
            break;
        }
        if (name[i] == ' ') {
            alert('Input only one word!')
            console.log('Input only one word!!')
            status = 1
        }
    } 
    if (status == 1) { 
        break;
    }
    let surname = prompt('Enter surname: ')
    let sn = surname
    for (let i = 0; i < surname.length; i++){
        
        surname[i] = Number.parseInt(surname[i]);
        if (!isNaN(surname[i]) && surname[i] != ' ') {
        
            console.log(surname[i]);
            alert('invalid symbol!')
            console.log('invalid symbol!')
            status = 1
        }
        if (surname[i] == ' ') {
            alert('Input only one word!')
            console.log('Input only one word!!')
            status = 1
        }
    } 
    if (status == 1) { 
        break;
    }
    let res = n[0].toUpperCase()
    res += n.slice(1).toLowerCase()
    let res2 = sn[0].toUpperCase()
    res2 += sn.slice(1).toLowerCase()

    alert(`Hello ${res}, ${res2}`)
    break;

} while (1)
