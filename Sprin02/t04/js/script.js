let range = prompt('Input range in format as below: ', '0-100')
let a = range.split('-', 2);
checkDivizion(1*a[0], 1*a[1])


function checkDivizion(beginRange, endRange) {
    let description;
    for (let i = beginRange; i <= endRange; i++) {
        description = `${i} is`;
        if (i % 2 == 0 && i != 0) {
            description+=' even,'
        }
        if (i % 3 == 0 && i != 0) {
            description+=' a multiple of 3,'
        }
        if (i % 10 == 0 && i != 0) {
            description+=' a multiple of 10'
        }
        if (description == `${i} is`){
            description = `${i} -`
        }
        console.log(description)
    }
    
}