"use strict";

/* 
DOM -> Document Object Model
- 일종의 객체로, 프론트 단에서 입력된 데이터를 서버로 보내는 역할
- querySelector() 의 인자로, html 문서의 id 값으로 값을 가져옴
- # 태그로 부여되어 있는 id 를 이용해 id값을 가져온다는 의미
*/

const id = document.querySelector("#id"),
        psword = document.querySelector("#psword"),
        loginBtn = document.querySelector("button");


loginBtn.addEventListener("click", login);

function login() {
    // 요청변수 req  오브젝트로 선언
    const req = {
        id: id.value,
        psword: psword.value,
    };


    // test
    //console.log(req); 

    /*
    req 로 전달받은 데이터를 서버로 보내주기
    서버와 프론트랑 해당 데이터를 어떤 경로에서 주고 받을지 결정해야함
    해당 경로에 api 가 존재해야함

    - 첫 파라미터: /login 이라는 경로, 두 번째 파라미터: 전달할 오브젝트
    - req 오브젝트 데이터를 JSON 의 형태로 전달하기 위해 JSON 형식으로 감싸주기( JSON.stringify() )
    - body 형식으로 데이터를 전달하기 위해서는, HTTP 형식의 "POST" method 로 전달해야 함 (Rest API 관련)
    - 요청 데이터가, 전달하는 데이터가 JSON 데이터라고 header 를 통해 알려줘야함
    */
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    // .then((res) => console.log(res.json()))
    // .then((Res) => console.log(res))

    .then((res) => res.json())
    .then(console.log);
}   
