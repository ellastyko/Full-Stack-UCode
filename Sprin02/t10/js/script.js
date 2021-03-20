function copyObj(obj) {

    const copy = {};
    for (i in obj) {
        copy[`${i}`] = obj[i]
    }   
    return copy;
}
