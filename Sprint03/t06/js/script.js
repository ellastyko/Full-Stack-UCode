const g = generateNumber(100)
let number = 1, last = 1, gen = 1

do {
    gen = g.next().value
    number = +prompt(`Previous result: ${last}. Enter a new number:`)

    if (isNaN(number)) {
        console.error('Invalid number')
    } else {
        last = gen
    }
} while (number !==  gen)

console.log('Result:', number)

function* generateNumber(generic) {
    let i = 1

    while (1) {
        i = (i + generic) % 27

        if (i > 10000) {
            i = 1
        }

        yield ~~i
    }
}


