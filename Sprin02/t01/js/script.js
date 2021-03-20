var a = 5
var big_int = 233453456456645n
var str = 'some text'
var bool = true
var Null = null
var undef

obj = {
    name: 'Vadik',
    age: 18
}
function func() {
    //some code
}
var symb =  Symbol('k');
alert(`
    a is ${typeof(a)} \n
    big_int is ${typeof(big_int)} \n
    str is ${typeof(str)} \n
    bool is ${typeof(bool)} \n
    Null is ${typeof(Null)} \n
    undef is ${typeof(undef)} \n
    obj is ${typeof(obj)} \n
    symb is ${typeof(symb)} \n
    func is ${typeof(func)} \n
    `);