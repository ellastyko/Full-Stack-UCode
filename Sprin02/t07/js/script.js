function sortEvenOdd(arr) {
    
    return arr.sort( function(e, r) {
        return e%2 - r%2 || e - r
    })
}