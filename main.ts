//closure =========================================

const createAdder = (a: number) => {
  function add(b: number) {
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

var createCounter = function (n: number) {
  let counter = n;
  return function () {
    return counter++;
  };
};

//counter =========================================
