'use strict';

console.log('---------1번---------');
function MakeOrder(name, price) {
    this.name = name;
    this.price = price;
}

const order1 = new MakeOrder('오렌지 쥬스', '2500');
const order2 = new MakeOrder('토마토 쥬스', '3000');

console.log(order1.name, order1.price);
console.log(order2.name, order2.price);

console.log('---------4번---------');
function work(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    })
}

work(1).then((result) => {
    console.log('첫 번째 작업', result);
    return work(1)
}).then(result => {
    console.log('두 번째 작업', result);
})