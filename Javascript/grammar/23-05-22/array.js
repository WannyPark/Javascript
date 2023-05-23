'use strict';

// Array
const arr1 = new Array();
const arr2 = [1, 2];

// Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// Looping over an array
console.log('======Looping======')
// for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// for of
for (let fruit of fruits) {
    console.log(fruit);
}
// forEach
fruits.forEach((fruit, index, array) => {
    console.log(fruit);
    console.log(index);
    console.log(array);
});

// Addtion, deletion, copy
// (end) push
fruits.push('strawberry', 'peach');
console.log(fruits);
// (end) pop
fruits.pop();
fruits.pop();
console.log(fruits);
// (head) unshift
fruits.unshift('strawberry', 'lemon');
console.log(fruits);
// (head) shift
fruits.shift();
fruits.shift();
console.log(fruits);
// shift, unshift 는 pop, push보다 느리다. 다른 인덱스 이동해야함
// splice
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'watermelon');
console.log(fruits);
// combine two array
const fruits2 = ['a', 'b'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// Searching
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.includes('apple'));
console.log(fruits.includes('banana'));
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));