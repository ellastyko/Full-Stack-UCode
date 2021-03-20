
function checkBrackets(string) {

    let mass = []
    if (string.indexOf('(') === -1 && string.indexOf(')') === -1 || string == 'null' || typeof(string) != "string" || string === NaN || string.length == null || typeof(string) == "number" || string == '') {
        return -1;
    }
    else {

        for (let i = 0; i <= string.length; i++) 
        {
            if (string.charAt(i) == '(') 
                mass.push('(')
            if (string.charAt(i) == ')') 
                mass.push(')')
        }
        mass = mass.join("")
        for (let i = 0; i <= string.length; i++) {
            mass = mass.replace(/\(\)/, "")
        }
    }
    return mass.length
}