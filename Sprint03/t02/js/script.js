

class Timer {
    constructor (title, delay, stopCount) {
        this.title = title
        this.delay = delay
        this.stopCount = stopCount

        return this
    }

    start = () => {
        let count = this.stopCount;
        console.log(`Timer ${this.title} started (delay=${this.delay},  stopCount=${this.stopCount})`)
        let it = setInterval( () => {
            count--; 
            this.tick(this.title, count); 
        }, this.delay);
        this.stop(it);
    }

    tick = (title, count) => {
        console.log(`Timer ${title} Tick! Cycles left ${count}`);
    }

    stop = (id) => {
        setTimeout(() => {
            clearInterval(id);
            console.log(`Timer ${this.title} stopped`);
        }, this.stopCount * 1000)
    }
}

function runTimer(id, delay, counter) {
    new Timer(id, delay, counter).start()
}


runTimer('id', 1000, 5)


