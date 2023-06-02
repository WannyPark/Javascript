class UserStorage {
    async loginUser(id, password) {
        await delay(2000);
        if ((id === 'jiwhy' && password === '1234') || (id === 'adgh4728' && password ==='1234')) {
            return id;
        } else {
            throw new Error('not found');
        }
    };
    async getRoles(user) {
        await delay(1000);
        if (user === 'jiwhy') {
            return {name: 'jiwhy', role: 'admin'};
        } else {
            throw new Error('no access');
        }
    };
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage //
.loginUser(id, password)
.then(user => userStorage.getRoles(user))
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);