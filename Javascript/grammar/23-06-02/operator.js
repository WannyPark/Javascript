'use strict';

// boolean
// false : false, 0, -0, ' ', null, undefined, NaN
// true : -1, 'hello', anydata, []
let num; // undefined
if (num) { // true or false
    console.log('true!');
} else {
    console.log('false!');
}

let obj = {
    name: 'jiwhy',
}
obj && console.log(obj.name);