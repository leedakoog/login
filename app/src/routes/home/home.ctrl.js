const output = {
    hello: (req, res) => {
        res.render("home/index")
    },
    login: (req, res) => {
        res.render("home/login") //페이지를 렌더링
    }
}

const users = {
    id: ["dabin", "yujin", "girlfriend"],
    psword: ["1234", "12345", "123456"],
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                })
            }
        }

        return res.json(
            {
                success: false,
                msg: "로그인에 실패하셨습니다.",
            }
        )
    }
}

//객체들 밖으로 내보내기.
module.exports = {
    output, process
}