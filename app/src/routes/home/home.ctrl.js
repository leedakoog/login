const hello = (req, res) => {
    res.render("home/index")
}

const login = (req, res) => {
    res.render("home/login")
}
//객체들 밖으로 내보내기.
module.exports = {
    hello,
    login,
}