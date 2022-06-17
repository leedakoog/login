
const fs = require("fs").promises;  //promise가 수행하는 동작이 끝남과 동시에 상태를 알려주기 때문에 비동기 처리에 아주 효과적임.

class UserStorage { //클래스안에 변수를 선언할 때는 const가 필요없음.
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);  //id가 들어있는 인덱스 반환.
        const usersKeys = Object.keys(users);  // => [id, psword, name], 키값들을 리스트로 만듦.
        const userInfo = usersKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});

        return userInfo;
    }
    
    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {  //User.js 에서 받아온 id 값을 파라미터로
        return fs.readFile("./src/databases/users.json") //readFile메소드는 promise를 반환함. promise를 반환하게 되면 then이라는 메소드에 접근 가능. then은 성공했을 때, catch는 실패했을때
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true };
    }
}

module.exports = UserStorage;