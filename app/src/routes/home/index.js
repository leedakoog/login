"use strict"

const express = require("express")
const router = express.Router()

const ctrl = require("./home.ctrl")

router.get("/", ctrl.output.hello)
router.get("/login", ctrl.output.login)
router.post("/login", ctrl.process.login)

module.exports = router //메인파일과 연결하는 역할.(외부로 내보내기)