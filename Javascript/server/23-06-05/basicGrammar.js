'use strict';

// this 
let man = {
    name: 'jiwhy',
    say: function() {
        console.log(this);
    }
};

let sayMan = people.say.bind(man);
man.say();
sayMan();

// Prototype
console.log('----------');
function func() { };
console.log(func.prototype);

func.prototype.name = 'jiwhy';
console.log(func.prototype);

const animal = {
    leg: 4,
    tail: 1,
    say() {
        console.log('Hi');
    }
}

const dog = {
    sound: 'wang',
    happy: true,
}

const cat = {
    sound: 'yang',
}

dog.__proto__ = animal;
cat.__proto__ = dog;

console.log(cat.happy);
console.log(cat.leg);

function Animal() { };

Animal.prototype.legs = 4;
Animal.prototype.tail = 1;

const dog = new Animal();
const cat = new Animal();