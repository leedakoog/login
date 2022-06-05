//모듈
const express = require('express')
const app = express()
//라우팅
const home = require("./routes/home")

app.set("views", "./views")
app.set("view engine", "ejs")

app.use("/", home)  // use -> 미들 웨어를 등록해주는 메서드

module.exports = app;
//npm install ejs -s 로 ejs모듈 다운받기.
