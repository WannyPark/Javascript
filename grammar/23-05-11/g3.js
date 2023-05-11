'use strict';

// String concatenation
console.log('----------String concatenation----------');
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals:
....
1 + 2 = ${1 + 2}`);
console.log("jiwhy's \n\tbook");
console.log('jiwhy\'s \n\tbook');

// Numeric operators
console.log('----------Numeric operators----------');
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// Increment and decrement operators
console.log('----------Increment and decrement operators----------');
let counter1 = 2;
const preIncrement = ++counter1;
// const preIncrement = counter1 + 1;
let counter2 = 2;
const afIncrement = counter2++;
// const afIncrement = counter2;
// counter = counter2 + 1;
console.log(`preIncrement: ${preIncrement}, counter1: ${counter1}`);
console.log(`preIncrement: ${afIncrement}, counter2: ${counter2}`);
let counter3 = 2;
const preDecrement = --counter3;
// const preDecrement = counter3 - 1;
let counter4 = 2;
const afDecrement = counter4--;
// const afDecrement = counter4;
// counter4 = counter4 - 1

// Assignment operators
console.log('----------Assignment operators----------');
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// Comparison operators
console.log('----------Comparison operators----------');
console.log(10 < 6); // false
console.log(10 <= 6); // false
console.log(10 > 6); // true
console.log(10 >= 6); // true

// Logical operators: ||(or), &&(and), !(not)
console.log('----------Logical operators----------');
const value1 = true;
const value2 = 4 < 2;
// ||(or), find the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// &&(and), find the first falsy value
console.log(`or: ${value1 && value2 && check()}`);
function check() {
    for(let i = 0; i < 10; i++) {
        console.log('1');
    }
    return true;
}
// !(not)
console.log(!value1);

//Equality
console.log('----------Equality----------');
const stringFive = '5';
const numberFive = 5;
// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
// object equality by reference
const me1 = {name: 'jiwhy'};
const me2 = {name: 'jiwhy'};
const me3 = me1;
console.log(me1 == me2);
console.log(me1 === me2);
console.log(me1 === me3);
//equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// Conditional operators
console.log('----------Conditional operators----------');
// if, else if, else
const name = 'jiwhy';
if(name === 'you') {
    console.log('Hello, you!');
} else if(name === 'me') {
    console.log('Hello, me!');
} else {
    console.log('Hello, jiwhy!');
}

// Ternary operator
console.log('----------Ternary operator----------');
// condition ? value1 : value2;
console.log(name === 'jiwhy' ? 'yes' : 'no');

// Switch
console.log('----------Switch----------');
const browser = 'Chrome';
switch(browser) {
    case 'IE':
        console.log('IE');
        break;
    case 'Chrome':
        console.log('Chrome');
        break;
    case 'Firefox':
        console.log('Firefox');
        break;
    default:
        console.log('Nothing');
        break;
}

// Loops
console.log('----------Loops----------');
// while
let i = 3;
while(i > 0) {
    console.log(`while: ${i}`);
    i--;
}
// do while
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);
// for
for(i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
for(let i = 3; i > 0; i = i - 2) {
    console.log(`inline variable for: ${i}`);
}
for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// break, continue
for(let i = 0; i <= 10; i++) {
    if(i % 2 === 0) {
        continue;
    }
    console.log(`continue: ${i}`);
}
for(let i = 0; i <= 10; i++) {
    if(i > 8) {
        break;
    }
    console.log(`break: ${i}`);
}