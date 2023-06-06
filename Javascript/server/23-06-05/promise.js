'use strict';

// Promise
// function work(sec, callback) {
//     setTimeout(() => {
//         callback(new Date().toISOString());
//     }, sec * 1000);
// };

// work(1, (result) => {
//     console.log('첫 번째 작업', result);
//     work(1, (result) => {
//         work(1, (result) => {
//             console.log('세 번째 작업', result);
//         });
//         console.log('두 번째 작업', result);
//     });
// });

// function workP(sec) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('workP function');
//         }, sec * 1000);
//     });
// }

// async function asyncFunc() {
//     const result_workP = await workP(3);
//     console.log(result_workP);
//     return 'async function'
// }

// asyncFunc().then((result) => {
//     console.log(result);
// });

// function f2() {
//     console.log('this is f2 start');
//     throw new Error('오류');
//     console.log('this is f2 end');
// }

// function f1() {
//     console.log('this is f1 start');
//     try {
//         f2();
//     } catch (e) {
//         console.log(e);
//     }
//     console.log('this is f1 end');
// }

// f1();

// function wait(sec) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('error!');
//         }, sec * 1000);
//     });
// }

// wait(3).catch(e => {
//     console.log('1st catch', e);
// });

// wait(3).catch(e => {
//     console.log('1st catch', e);
// })
//     .catch(e => {
//         console.log('1st catch', e);
//     });

// wait(3).catch(e => {
//     console.log('1st catch', e);
//     throw e;
// }).catch(e => {
//     console.log('1st catch', e);
// });

// wait(3).then(() => {
//     console.log('Success');
// }, e => {
//     console.log('Catch in Then', e);
// });

// async function myAsyncFunc() {
//     return 'done';
// }

// const result = myAsyncFunc();
// console.log(result);

// async function myAsyncFunc() {
//     throw 'myAsync Error!';
// }

// function myPromiseFunc() {
//     return new Promise((resolve, reject) => {
//         reject('myPromiseFunc Error!');
//     });
// }

// const result = myAsyncFunc().catch(e => {console.log(e)});
// const result2 = myPromiseFunc().catch(e => {console.log(e)});

// function wait(sec) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('throw Error!');
//         }, sec * 1000);
//     });
// }

// async function myAsyncFunc() {
//     console.log(new Date());
//     try {
//         await wait(2);
//     } catch (e) {
//         console.error(e);
//     }
//     console.log(new Date());
// }

// const result = myAsyncFunc();

// async function myAsyncFunc() {
//     consolejljalk.log(new Date());
//     const result = await wait(2).catch(e => {
//         console.log(e)
//     });
//     console.log(new Date());
// }

// try {myAsyncFunc();} catch (e) {}
// myAsyncFunc().catch(e => {
//     console.log(e);
// });