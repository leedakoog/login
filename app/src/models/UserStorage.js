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
}

module.exports = UserStorage;