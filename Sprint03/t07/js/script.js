'use strict';


class Node {
    constructor(data) {

        this.data = data;
        this.next = null;
    }   
}

class LinkedList {

    constructor() {

        this.head = null;
        this.size = 0;
    }
    add(value) {

        const node = new Node(value)

        if (this.size === 0) {
            this.head = node
        } else {

            let current = this.head

            while (current.next) { // Пока куррент != нулю цикл работает (получаем до этого созданный узел)

                current = current.next // Нашей текущей ячейкой становиться следующая 
            }
            current.next = node // Когда находим некст ни на что не указывающий мы ставим указатель на предыдущий узел
        }
        this.size++
    }
    remove(value) {
        
        let current = this.head
        while (current.next != null) {  

            if (value == this.head.data) {
                this.head = this.head.next
                return 1
            }           
            if (value == current.next.data) {
                current.next = current.next.next // Это просто гениально
                return 1
            }          
            current = current.next
        }
        return 0
    }
    contains(value) {

        let current = this.head
        while (1) {
            if (current.data == value) 
                return true               
            else {              
                if (current.next == null)
                    break
                current = current.next
            }            
        }
        return false
    }

    [Symbol.iterator] = function* () {
        let current = this.head;
        while(current){
            yield current.data;
            current = current.next;
        }
    }

    clear () {
        let temp;
        let current = this.head
        while (1) {
            temp = current.next
            current.data = null
            current.next = null
            if (temp == null)
                break
        }
        this.size = 0
    }

    count() {
        return this.count
    }

    log() {
        let out = ""
        let current = this.head
        while (1) {       

                    
            if (current.next == null) {
                out += `${current.data}`
                break
            }              
            else {
                out += `${current.data}, `
            }
            current = current.next
        }   
        if (out != 'null')
            console.log(`"${out}"`)   
        else    
            console.log("")       
    }
}

function createLinkedList(arr) {

    const a = new LinkedList();
    for (let i of arr) 
        a.add(i)
    return a
}



// const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
// ll.log();
// // "100, 1, 2, 3, 100, 4, 5, 100"
// while(ll.remove(100));
// ll.log();
// // "1, 2, 3, 4, 5"
// ll.add(10);
// ll.log();
// // "1, 2, 3, 4, 5, 10"
// console.log(ll.contains(10));
// // "true"
// let sum = 0;
// for(const n of ll) {
//     sum += n;
// }
// console.log(sum);
// // "25"
// ll.clear();
// ll.log();











