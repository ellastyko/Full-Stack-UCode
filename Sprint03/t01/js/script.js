

Object.assign(String.prototype, {
    removeDuplicates() {
        
        arr = this.split(' ')

        for (let i in arr) {
            for (let j in arr) { 
                if (arr[i] != '' && arr[i] == arr[j] && i != j) {

                    arr.splice(j, 1)
                }               
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '' && arr[i+1] === arr[i]) {
                arr.splice(i, 1)
            }                  
        }
        str = ''
        for (let i of arr) {
            if (i != '')
                str+= `${i} `
        }
        return str
    }
});

// let a = 'hello hello  bro  I am not hate and   hate your dadd';
// console.log(a.removeDuplicates())

