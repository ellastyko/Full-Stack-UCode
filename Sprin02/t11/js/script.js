function addWords(obj, str) {
    let str0 = obj['words'];

    let arr0 = str0.split(' ')
    for (let i = 0; i < arr0.length; i++) {
        for (let j = 0; j < arr0.length; j++) {
            if (i != j) {
                if (arr0[i] == arr0[j]) {
                    arr0[j] = '';
                }
            }
        }
    }
    let arr1 = str.split(' ')
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (i != j) {
                if (arr1[i] == arr1[j]) {
                    arr1[j] = '';
                }
            }
        }
    }
    for (let i = 0; i < arr0.length; i++) {
        for (let j = 0; j < arr1.length; j++) {          
            if (arr0[i] == arr1[j]) {
                arr1[j] = '';
            }
        }
    }
    resarr = arr0.concat(arr1)
    let res = '';
    for (let i in resarr) {
        if (resarr[i] != '')
            res += resarr[i] + ' '
    }
    obj['words'] = res 
    return obj
}

function removeWords(obj, str) {

    let str0 = obj['words'];

    let arr0 = str0.split(' ')
    let arr1 = str.split(' ')


    for (let i = 0; i < arr0.length; i++) {
        for (let j = 0; j < arr0.length; j++) {
            if (i != j) {
                if (arr0[i] == arr0[j]) {
                    arr0[j] = '';
                }
            }
        }
    }

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (i != j) {
                if (arr1[i] == arr1[j]) {
                    arr1[j] = '';
                }
            }
        }
    }
    for (let i = 0; i < arr0.length; i++) {
        for (let j = 0; j < arr1.length; j++) {          
            if (arr0[i] == arr1[j]) {
                arr0[i] = '';
            }
        }
    }

    let res = ''
    for (let i in arr0) {
        if (arr0[i] != '')
            res += arr0[i] + ' '
    }
    obj['words'] = res 
    return obj
}

function changeWords(obj, str1, str2) {

    let str0 = obj['words'];

    let arr0 = str0.split(' ')
    let arr1 = str1.split(' ')
    for (let i = 0; i < arr0.length; i++) {
        for (let j = 0; j < arr0.length; j++) {
            if (i != j) {
                if (arr0[i] == arr0[j]) {
                    arr0[j] = '';
                }
            }
        }
    }
    for (let i = 0; i < arr0.length; i++) {

        for (let j = 0; j < arr1.length; j++) {      

            if (arr0[i] == arr1[j]) {
                if (arr0[i] != '') {
                    arr0[i] = str2;
                }                 
            }
        }
    }
    let res = ''
    for (let i in arr0) {
        if (arr0[i] != '')
            res += arr0[i] + ' '
    }
    obj['words'] = res 
    return obj
}


