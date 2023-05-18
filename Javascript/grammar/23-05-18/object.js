'use strict';

// Object = {key value};
// literals and properties
const obj1 = {}; // object literal
const obj2 = new Object(); // object constructor
function print(key) {
    console.log(key.name);
    console.log(key.age);
}
const jiwhy = {name: 'jiwhy', age: 4};
print(jiwhy);
jiwhy.hasJob = true;
console.log(jiwhy.hasJob);
delete jiwhy.hasJob;
console.log(jiwhy.hasJob);

// Computed properties
console.log(jiwhy.name); // 값을 받아올때
console.log(jiwhy['name']); // 실시간으로 값을 받을때
jiwhy['hasJob'] = true;
console.log(jiwhy.hasJob);
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(jiwhy, 'name');
printValue(jiwhy, 'age');

// Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('jiwhy', 20);
console.log(person4);
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// In operator
console.log('name' in jiwhy);
console.log('age' in jiwhy);
console.log('random' in jiwhy);
console.log(jiwhy.random);

// for ... in vs for ... of
for (const key in jiwhy) {
    console.log(key);
}
// for (value of iterable)
const array = [1, 2, 4, 5];
for (const value of array) {
    console.log(value);
}

// Fun cloning
const user = {name: 'jiwhy', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);
const user3 = {};
for (const key in user) {
    user3[key] = user[key];
}
console.log(user3);
const user4 = Object.assign(user);
console.log(user4);
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big