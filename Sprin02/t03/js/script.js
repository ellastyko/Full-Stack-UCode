let input

do {
    input = Number.parseInt(prompt('Input number from 1 to 10'))
} while(!Number.isFinite(input) || input < 1 || input > 10)

//!/[0-9]/.test(input)

switch(input) {

    case 1: alert('Back to square 1'); break;
    case 2: alert('Goody 2-shoes'); break;
    case 3: alert("Two's company, three's a crowd"); break;
    case 4: alert('Counting sheep'); break;
    case 5: alert('Take five'); break;
    case 6: alert("Two's company, three's a crowd"); break;
    case 7: alert('seventh heaven'); break;
    case 8: alert('Behind the eight-ball'); break;
    case 9: alert('Counting sheep'); break;
    case 10: alert('Cheaper by the dozen'); break;
    default: break;
}