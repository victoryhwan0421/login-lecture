"use strict";

/* 
DOM -> Document Object Model
- 일종의 객체로, 프론트 단에서 입력된 데이터를 서버로 보내는 역할
- querySelector() 의 인자로, html 문서의 id 값으로 값을 가져옴
- # 태그로 부여되어 있는 id 를 이용해 id값을 가져온다는 의미
*/

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    // 요청변수 req  오브젝트로 선언
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    };

    /*
    req 로 전달받은 데이터를 서버로 보내주기
    서버와 프론트랑 해당 데이터를 어떤 경로에서 주고 받을지 결정해야함
    해당 경로에 api 가 존재해야함

    - 첫 파라미터: /register 이라는 경로, 두 번째 파라미터: 전달할 오브젝트
    - req 오브젝트 데이터를 JSON 의 형태로 전달하기 위해 JSON 형식으로 감싸주기( JSON.stringify() )
    - body 형식으로 데이터를 전달하기 위해서는, HTTP 형식의 "POST" method 로 전달해야 함 (Rest API 관련)
    - 요청 데이터가, 전달하는 데이터가 JSON 데이터라고 header 를 통해 알려줘야함
    */

    fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                // 로그인 성공 시 루트 경로로 이동
                location.href = "/login";
            } else {
                // 로그인 실패 시 알림 메시지 띄우기
                alert(res.msg);
            }
        })
        .catch((err) => {
            // new Error("~~") 를 이용하여 ~~ 에러 띄우기
            console.error("회원가입 중 에러 발생");
        });
} 