function concat(str1, str2) {

    let count = 0;
    if (str2 == undefined) {
        
        return function use_prompt() {
            count += 1;
            use_prompt.count = count;
            return str1 + ' ' + prompt('Enter: ');
        }
    }   
    else {
        return str1 += ' ' + str2
    } 
}