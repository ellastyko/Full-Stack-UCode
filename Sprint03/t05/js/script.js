//  WEAKSET

let guestList = new WeakSet()

let vadik = {
    age: 19,
    code: 787671
};
guestList.add(vadik)

let vova = {
    age: 19,
    code: 3452
};
guestList.add(vova)

let vlad = {
    age: 19,
    code: 4353
};
guestList.add(vlad)

let nikita = {
    age: 20,
    code: 1564
};
guestList.add(nikita)

let sonya = {
    age: 18,
    code: 11212
};
guestList.add(sonya)

let james = {}

guestList.has(nikita); // true
guestList.has(james);    // false, james не добавлен в WeakSet

guestList.delete(nikita); // удаляет window из WeakSet



// SET

let menu = new Set() 

menu.add('lobster')
menu.add('1400$')
menu.add('potato')
menu.add('8$')
menu.add(sonya)

menu.size // 5

menu.delete('potato')

menu.has('potato') //false

for (let i of menu) {
    console.log(i)
}


// WEAK MAP

let bankVault = new WeakMap()

let user1 = {
    id: 596245664535,
    name: 'vadik'
}
bankVault.set(user1, 212312)
let user2 = {
    id: 596354645668,
    name: 'vova'
}
bankVault.set(user2, 123123)
let user3 = {
    id: 5961534523,
    name: 'bred'
}
bankVault.set(user3, 123123)
let user4 = {
    id: 596945534596,
    name: 'karl'
}
bankVault.set(user4, 123123)
let user5 = {
    id: 5962345345599,
    name: 'james'
}
bankVault.set(user5, 123123)

bankVault.get(user5) 

bankVault.has(user2) // true

bankVault.delete(user4)

console.log(bankVault)


let coinCollection = new Map()

coinCollection.set(1, 'vadik')
coinCollection.set(2, 'david')
coinCollection.set(3, 'james')
coinCollection.set(4, 'ted')
coinCollection.set(5, 'bred')

coinCollection.get(1) // Vadik

coinCollection.has(2) // true

coinCollection.size // 5

for (let [key, value] of coinCollection.entries()) 
    console.log(`${key} - ${value}`)

coinCollection.clear()

