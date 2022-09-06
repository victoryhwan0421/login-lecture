"use strict";
/// MVC 구조를 위한 코드

// home.ctrl.js 스크립트에서 UserStorage.js에 접근하려면, 
// 상위 폴더 -> 상위 폴더 -> models -> UserStorage.js
const UserStorage = require("../../models/UserStorage")

const output = {
    // home 오브젝트
    home: (req, res) => {
    // 브라우저에서 "/" 경로로 요청이 들어오면, 아래 코드 실행
    res.render("home/index"); // render 메소드에 파일이름을 문자열로 입력
    },

    // login 객체
    login: (req, res) => {
    res.render("home/login");
    },

    register: (req, res) => {
        res.render("home/register");
    },
};

// process 객체
// - req : 프론트에서 전달 받은 req 객체
const process = { 
    login: (req, res) => {
        const id = req.body.id,
          psword = req.body.psword;

        const users = UserStorage.getUsers("id", "psword");

        const response = {}; // response 오브젝트를 생성하여 가독성 up
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword){
                // 로그인 성공 시, response.success = true 인 오브젝트 반환
                response.success = true;
                return res.json(response);
            }
        }

        // 로그인 실패 시, login.js 에서 alert(res.msg) 로 로그인 실패 메세지를 띄움
        response.success = false;
        response.msg = "로그인에 실패했습니다.";
        return res.json(response);
    },
};

// home, login 객체 모듈을 외부로 exports 하기
module.exports = {
    output,
    process,
};