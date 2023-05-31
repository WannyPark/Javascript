'use strict';
/*
const userStorage = new Promise((resolve, reject) => {
    const id = prompt('enter your id');
    const password = prompt('enter your password');
    if ((id === 'jiwhy' && password === '1234') || (id === 'adgh4728' && password === '1234')) {
        resolve(id);
    } else {
        reject(new Error('not found'));
    }
});
userStorage //
.then(id => {
    return new Promise((resolve, reject) => {
        if (id === 'jiwhy') {
            resolve({name: 'jiwhy', role: 'admin'});
        } else {
            reject(new Error('no access'));
        }
    });
})
.catch(error => console.log(error))
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(error => console.log(error));
*/
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((id === 'jiwhy' && password === '1234') || (id === 'adgh4728' && password ==='1234')) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'jiwhy') {
                    resolve({name: 'jiwhy', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage //
.loginUser(id, password)
.then(user => userStorage.getRoles(user))
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);