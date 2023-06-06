'use strict';

setTimeout(() => {
    console.log('3 seconds');
}, 3000);

setTimeout(() => {
    console.log('2 seconds');
}, 2000);

setTimeout(() => {
    setTimeout(() => {
        console.log('5 seconds');
    }, 2000);
    console.log('3 seconds');
}, 3000);

function fakeSetTimeout(callback) {
    callback();
}

console.log('Hi');

fakeSetTimeout(function () {
    console.log('Hello');
});

console.log('Hi');

console.log('Hi');

setTimeout(function () {
    console.log('Hello');
}, 0);

console.log('Hi');