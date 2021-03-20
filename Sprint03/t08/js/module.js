

class Node {
    constructor(data) {

        this.data = data;
        this.next = null;
    }   
}

export class LinkedList {

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
            console.log(`""`)       
    }
}

