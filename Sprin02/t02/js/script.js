var animal, sex, age,description

animal = prompt('What animal is the superhero most similar to?')
if (animal.length > 20 || /\w*\s+\w*/.test(animal) || /[\d]/i.test(animal)) {
    alert('Animal error')
}
else {
    sex = prompt('Is superhero male or female?');
    if (!/male/i.test(sex) && !/female/i.test(sex) && sex.length != 0) {
        alert('Sex error');
    }
    else {
        age = prompt('How old is superhero?')
        if (age.length > 5 || !/[0-9]/.test(age) || age == 0) {
            alert('Age error')
        }
        else {
            if (age < 18) {
                if (sex === 'female')
                    description = 'girl'
                if (sex === 'male')
                    description = 'boy'
                if (sex == '') {
                    description = 'kid'
                }
            }
            else if (age >= 18) {
                if (sex === 'female')
                    description = 'woman'
                if (sex === 'male')
                    description = 'man'
                if (sex == '') {
                    description = 'hero'
                }
            }
            alert(`The superheroname is: ${animal}-${description}`)
        }
    }
}












