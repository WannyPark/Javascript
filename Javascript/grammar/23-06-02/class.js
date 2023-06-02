'use strict';

// class
class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callBack = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0 && this.callBack) {
            this.callBack(this.counter);
        }
    }
}

const coolCounter = new Counter(printSomething);
function printSomething(num) {
    console.log(`wow! ${num}`);
}
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();