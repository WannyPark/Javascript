'use strict';

function add(num1, num2) {
    return num1 + num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

const doSomething = add; // doSomething === add

const result = doSomething(4, 7);
console.log(result); // 11
const result2 = add(4, 7);
console.log(result2); // 11

function surprise(operator) {
    const result = operator(1, 2);
    console.log(result);
}

surprise(add); // 3
surprise(divide); // 0.5