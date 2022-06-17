class UserStorage { //클래스안에 변수를 선언할 때는 const가 필요없음.
    static #users = { //static은 클래스변수로 인스턴스 생성없이 바로 사용가능.
        //#은 자료은닉화. private역할을 한다.
        id: ["dabin", "yujin", "girlfriend"], 
        psword: ["1234", "12345", "123456"],
        name: ["다빈", "유진", "살구"],
    }

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {  //User.js 에서 받아온 id 값을 파라미터로
        const users = this.#users;
        const idx = users.id.indexOf(id);  //id가 들어있는 인덱스 반환.
        const usersKeys = Object.keys(users);  // => [id, psword, name], 키값들을 리스트로 만듦.
        const userInfo = usersKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true };
    }
}

module.exports = UserStorage;