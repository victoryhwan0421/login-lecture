"use strict";
/// MVC 구조를 위한 코드

// home 객체
const home = (req, res) => {
    // 브라우저에서 "/" 경로로 요청이 들어오면, 아래 코드 실행
    res.render("home/index") // render 메소드에 파일이름을 문자열로 입력
}

// login 객체
const login = (req, res) => {
    res.render("home/login")
}

// home, login 객체 모듈을 외부로 exports 하기
module.exports = {
    home,
    login,
}