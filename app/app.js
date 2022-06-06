//모듈
const express = require('express')
const app = express()
//라우팅
const home = require("./src/routes/home")

app.set("views", "./src/views")
app.set("view engine", "ejs")
app.use(express.static(`${__dirname}/src/public`)) //정적 경로 추가, 디렉터리네임은 현재 파일이 있는 경로를 반환

app.use("/", home)  // use -> 미들 웨어를 등록해주는 메서드

module.exports = app;
//npm install ejs -s 로 ejs모듈 다운받기.
