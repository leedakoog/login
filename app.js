//모듈
const express = require('express')
const app = express()

const post = 3000
//라우팅
const home = require("./routes/home")

app.set("views", "./views")
app.set("view engine", "ejs")

app.use("/", home)  // use -> 미들 웨어를 등록해주는 메서드

app.listen(post, () => {
    console.log(`서버 가동`)
}
)
//npm install ejs -s 로 ejs모듈 다운받기.
