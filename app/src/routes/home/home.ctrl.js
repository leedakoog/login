const UserStorage = require("../../models/UserStorage.js") //상위 폴더는 ../로 타고 올라감.

const output = {
    hello: (req, res) => {
        res.render("home/index")
    },
    login: (req, res) => {
        res.render("home/login") //페이지를 렌더링
    } 
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        const users = UserStorage.getUsers("id", "psword"); //static이므로 인스턴트 생성없이 바로 사용가능하다.
        
        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response)
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하였습니다.";

        return res.json(response)
    }
}

//객체들 밖으로 내보내기.
module.exports = {
    output, process
}