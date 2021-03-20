

houseMixin =  {

    wordReplace(string1, string2) {
        this.description = this.description.replace(string1, string2);
    },

    wordDelete(string1) {
        this.description = this.description.replace(string1, '');
    },

    wordInsertAfter(string1, string2) {
        this.description = this.description.replace(string1, string1 + ' ' + string2);
    },

    wordEncrypt() {
        function rot13(string) {
            return string.replace(/[a-zA-Z]/g, function(chr) {
              var start = chr <= 'Z' ? 65 : 97;
              return String.fromCharCode(start + (chr.charCodeAt(0) - start + 13) % 26);
            });
        }
        let string2 = this.description;
        string2 = rot13(string2);
        this.description = this.description.replace(this.description, string2);
    },

    wordDecrypt() {
       this.wordEncrypt();
    }
}


const house = new HouseBuilder('88 Crescent Avenue' ,
                'Spacious town house with wood flooring, 2-car garage, and a back patio.',
                    'J. Smith', 110, 5);

Object.assign(house, houseMixin);


console.log(house.getDaysToBuild());
// 220

console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.
house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.
house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.
house.wordInsertAfter("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.
house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio