'use strict';

// shorthand property names
{
    const jiwhy1 = {
        name: 'jiwhy',
        age: '18',
    }

    const name = jiwhy1.name;
    const age = jiwhy1.age;

    const jiwhy2 = {
        name: name,
        age: age,
    }

    const jiwhy3 = {
        name,
        age,
    }

    console.log(jiwhy1, jiwhy2, jiwhy3);
}

// Destructuring Assignment
console.log(`-------------------
-------------------
-------------------`);
{
    const student = {
        name: 'jiwhy',
        level: 1,
    }

    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    {
        const {name, level} = student;
        console.log(name, level);

        const {name: studentName, level: studentLevel} = student;
        console.log(studentName, studentLevel);
    }
    // array
    const animals = ['🐶', '😺'];
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }
    {
        const [first, second] = animals;
        console.log(first, second);
    }
}

// Spread Syntex
console.log(`-------------------
-------------------
-------------------`);
{
    const obj1 = {key: 'key1'};
    const obj2 = {key: 'key2'};
    const array = [obj1, obj2];
    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, {key: 'key3'}];
    obj1.key = 'jiwhy';
    console.log(array, arrayCopy, arrayCopy2);
    // array == arrayCopy == arrayCopy2 !!

    // object copy
    const obj3 = {...obj1};
    console.log(obj3);

    // array concatenation
    const fruits1 = ['🍎', '🍌'];
    const fruits2 = ['🍉', '🍒'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    // object merge
    const dog1 = {dog: '🐶'};
    const dog2 = {dog: '🐕'};
    const dog = {...dog1, ...dog2};
    console.log(dog);
}

// default parameters
console.log(`-------------------
-------------------
-------------------`);
{
    {
        function printMessage(message) {
            if (message == null) {
                message = 'default message';
            }
            console.log(message);
        }
        printMessage('hi');
        printMessage();
    }

    {
        function printMessage(message = 'default message') {
            console.log(message);
        }
        printMessage('hi');
        printMessage();
    }
}

// Ternary Operator
console.log(`-------------------
-------------------
-------------------`);
{
    const isCat = true;
    {
        let component;
        if (isCat) {
            component = '🐈';
        } else {
            component = '🐕';
        }
        console.log(component);
    }
    {
        const component = isCat ? '🐈' : '🐕';
        console.log(component);
        console.log(isCat ? '🐈' : '🐕');
    }
}

// Template Literals
console.log(`-------------------
-------------------
-------------------`)
{
    const weather = '🌨️';
    const temparature = '16˚C'

    console.log('Today weather is ' + weather + ' and temparature is ' + temparature);
    console.log(`Today weather is ${weather} and temparature is ${temparature}`);
}

// Optional Chaining(ES11)
console.log(`-------------------
-------------------
-------------------`);
{
    const person1 = {
        name: 'jiwhy',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob',
            },
        },
    };
    const person2 = {
        name: 'Bob',
    };

    {
        function printManager(person) {
            console.log(person.job.manager.name);
        }
        printManager(person1);
        // printManager(person2);
    }
    {
        function printManager(person) {
            console.log(
                person.job
                    ? person.job.manager
                        ? person.job.manager.name
                        : undefined
                    :undefined
            );
        };
        printManager(person1); // Bob
        printManager(person2); // undefined
    }
    {
        function printManager(person) {
            console.log(person.job && person.job.manager && person.job.manager.name);
        }
        printManager(person1); // Bob
        printManager(person2); // undefined
    }
    {
        function printManager(person) {
            console.log(person.job?.manager?.name);
        }
        printManager(person1); // Bob
        printManager(person2); // undefined
    }
}

// Nullish Coalescing Operator
console.log(`-------------------
-------------------
-------------------`);
{
    {
        const name = 'jiwhy';
        const userName = name || 'Guest';
        console.log(userName);
    }
    {
        const name = null;
        const userName = name || 'Guest';
        console.log(userName);
    }
    {
        const name = '';
        const userName = name || 'Guest';
        console.log(userName);
        const num = 0;
        const message = num || 'undefined';
        console.log(message);
    }
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);
        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);
    }
}