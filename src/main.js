"use strict";
//closure =========================================
const createAdder = (a) => {
    function add(b) {
        return a + b;
    }
    return add;
};
const f = createAdder(5);
console.log(f(10));
const increment = () => {
    let counter = 0;
    function incrementCounter() {
        return ++counter;
    }
    return {
        result: incrementCounter,
    };
};
const counter1 = increment();
const counter2 = increment();
console.log(counter1.result());
console.log(counter2.result());
//counter =========================================
var createCounter = function (n) {
    let counter = n;
    return function () {
        return counter++;
    };
};
function createCounter2(init) {
    let value = init;
    function increment() {
        return ++value;
    }
    function decrement() {
        return --value;
    }
    function reset() {
        value = init;
        return value;
    }
    return {
        increment: increment,
        decrement: decrement,
        reset: reset,
    };
}
