'use strict';
// let
let globalName = 'global';
// block scope
{
    let name = 'jiwan';
    console.log(name);
    name = 'hello';
    console.log(name);
}
// console.log(name);
console.log(globalName);
// var hoisting (move declaration from bottom to top)
{
    age = 4;
    var age;
}
console.log(age);
// constant
console.log('---------const--------');
const daysInWeek = 7;
const maxNumber = 5;
console.log(daysInWeek);
console.log(maxNumber);
// variable types
// int float
console.log('---------int / float--------');
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
// ?
console.log('---------    --------');
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
// bit int
console.log('---------big int--------');
const bigInt = 123456789123456789123456789123456789n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
// string
console.log('---------string--------');
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ', type: ' + typeof helloBob);
// boolean
console.log('---------boolean--------');
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
// null
console.log('---------null / undefined--------');
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);
// symbol, create unique identifiers for objects
console.log('---------symbol--------');
const string1 = 'hello';
const string2 = 'hello';
console.log(string1 === string2);
const symbol1 = Symbol('hi');
const symbol2 = Symbol('hi');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('good');
const gSymbol2 = Symbol.for('good');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// object
console.log('---------object--------');
const me = {name: 'jiwan', age:20};
me.age = 24;
console.log(me.age);
// Dynamic typing
console.log('---------dynamic typing--------');
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
