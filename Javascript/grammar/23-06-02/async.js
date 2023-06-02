'use strict';

// async & await
// clear style of using promise

// async
async function fetchuser() {
    return 'jiwhy';
}

const user = fetchuser();
user.then(console.log);
console.log(user);

// await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = applePromise;
    const banana = bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);