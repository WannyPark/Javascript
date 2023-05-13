'use strict';

// Function
console.log('-----Function-----');
function printHello() {
    console.log('Hello');
}
printHello();

// Parameters
console.log('-----Parameters-----');
function log(message) {
    console.log(message);
}
log('Hello');
function changeName(obj) {
    obj.name = 'coder';
}
const jiwhy = { name: 'jiwhy' };
changeName(jiwhy);
console.log(jiwhy);

// Default parameters
console.log('-----Default parameters-----');
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// Rest parameters
console.log('-----Rest parameters-----');
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('ji', 'why', 'hi');

// Local scope
console.log('-----Local scope-----');
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();
// console.log(message); <- error

// Return a value
console.log('-----Return a value-----');
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);
// return undefined;

// Early return, early exit
console.log('-----Early return, early exit-----');
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic
    }
} // bad
function upgradeUser(user) {
    if (user.point <= 10) {
        return ;
    }
    // long upgrade logic
} // good

// Function expression
// Function 호이스팅
console.log('-----Function expression-----');
const print = function() { // anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// Callback function
console.log('-----Callback function-----');
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function() {
    console.log('Yes!');
}
const printNo = function() {
    console.log('No!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
console.log('-----Arrow function-----');
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b; // block x , return x
const simpleMultiply = (a, b) => {
    return a * b;
}
simplePrint();
console.log(add(3, 2));
console.log(simpleMultiply(3, 2));

// IIFE: Immediately Invoked Function Expression
console.log('-----IIFE-----');
(function hello() {
    console.log('IIFE');
})();

// quiz
const calculate = (command, a, b) => {
    if (command === 'add') {
        return console.log(a + b);
    } else if (command === 'substract') {
        return console.log(a - b);
    } else if (command === 'divide') {
        return console.log(a / b);
    } else if (command === 'multiply') {
        return console.log(a * b);
    } else if (command === 'remainder') {
        return console.log(a % b);
    } else {
        return console.log('error');
    }
}
calculate('add', 1, 2);