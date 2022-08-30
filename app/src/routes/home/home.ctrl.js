"use strict";
/// MVC 구조를 위한 코드


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
};


// user 객체
const users = {
    id: ["woorimIT", "이승환", "김종선"],
    psword: ["1234", "123", "1"],
};




// process 객체
// - req : 프론트에서 전달 받은 req 객체
const process = {
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = user.id.indexOf(id);
            if (users.psword[idx] == psword){
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패했습니다."
        });
    },
};

// home, login 객체 모듈을 외부로 exports 하기
module.exports = {
    output,
    process,
};