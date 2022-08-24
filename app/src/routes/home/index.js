 "use strict";
//  routes/home


/// 기존 app 에서 router 로 교체
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl") // MVC 패턴을 위한 



/// 루트 경로
router.get("/", ctrl.home); // /(루트) 경로 접근 시, control 의 hello 로 접근

/// 로그인 화면
router.get("/login", ctrl.login); // /login 경로 접근 시, control 의 login 으로 접근

// app.js 에서 routes/home 폴더에 존재하는 index.js 파일 연결
module.exports = router;