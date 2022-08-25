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
        id : id.value,
        psword : psword.value,
    };


    // test
    console.log(req); 

    // req 로 전달받은 데이터를 서버로 보내주기
    //fetch();
}
