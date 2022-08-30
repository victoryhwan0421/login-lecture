"use strict";
/// MVC 구조를 위한 코드
// user 객체
const users = {
    id: ["aae1", "aae12", "aae123"],
    psword: ["1", "1", "1"],
};

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

// process 객체
// - req : 프론트에서 전달 받은 req 객체
const process = {
    login: (req, res) => {
        const id = req.body.id,
          psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword){
                return res.json({
                    success: true,
                    // 로그인 성공 시, success:true 라는 오브젝트를 json형식으로 res, 프론트엔드로 응답
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패했습니다.", // 이후 login.js 에서 alert(res.msg) 로 메세지를 띄움
        });
    },
};

// home, login 객체 모듈을 외부로 exports 하기
module.exports = {
    output,
    process,
};