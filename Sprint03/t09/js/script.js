
let validator = {

    get: function(obj, property)  {

        console.log(`Trying to access the property '${property}'`);
        if (property == 'age') {         
            return validator[property]
        }        
        if (property == 'gender')   {
            return validator[property]
        }
        else {
            return false
        }

    },
    set: function(obj, property, value) {

        if (property == 'gender') {

            console.log(`Setting value '${value}' to '${property}'`);
            validator[property] = value;
        }
        else if (property == 'age') {

            if (value < 0 || value > 200) {

                throw new RangeError('The age is invalid');
            }     
            if (isNaN(value)) {
    
                throw new 'The age is not an integer';
            }
            console.log(`Setting value '${value}' to '${property}'`);
            validator[property] = value;
        }        
    }
}

let person = new Proxy({}, validator)

person.age = 100;
// Setting value '100' to 'age'
console.log(person.age);
// Trying to access the property 'age'...
// 100
person.gender = "male";
// Setting value 'male' to 'gender'
person.age = 'young';
// Uncaught TypeError: The age is not an integer
person.age = 300;
// Uncaught RangeError: The age is invalid
