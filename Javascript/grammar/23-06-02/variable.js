'use strict';

// number, string, boolean, null, undefined
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

// object
let obj = {
    name: 'jiwhy',
    age: 20,
};

console.log(obj.name);
console.log(obj.age);

let obj2 = obj;

console.log(obj2.name);
console.log(obj2.age);

obj2.name = 'park';
obj2.age = 10;

console.log(obj.name);
console.log(obj.age);
console.log(obj2.name);
console.log(obj2.age);

const obj3 = {
    name: 'someone',
    age: 15,
}

/* obj {
    name: 'me',
    age: 16,
} */

obj3.name = 'me';
obj3.age = 16,

console.log(obj3.name);
console.log(obj3.age);