/*
http 로 서버 띄워보기
http 는 내장모듈로 별도의 다운로드 과정이 필요하지 않음
굳이 http 로 서버를 띄워보는 이유는 우리가 왜 express 프레임워크를 사용해야 하는지 느껴보기 위함이다.
                     
                 
const http = require("http");
const app = http.createServer((req, res) =>{
    // 브라우저 한글 설정
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
                     
    // console.log(req.url); //request 경로에 접속하면 루트 경로 이후에 있는 url을 파싱
    // 각 경로에 대한 라우팅 연결
    if (req.url === "/") {
        res.end("여기는 루트입니다.");
    } else if (req.url === "/login") {
        res.end("여기는 로그인 화면입니다.");
    }
});

app.listen(3001, () =>{
    console.log("http로 가동된 서버입니다.")
});         
*/

/*
app.js
앞으로 사용할 서버의 중심파일

+ express 를 이용하여 웹서버를 띄어봄
+ 라우팅(브라우저가 원하는 경로로 이동하는 것) 구현
*/

"use strict";

/// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();




/// 라우팅
/// 상대 경로를 지정 시, 해당 경로에 존재하는 index.js 파일을 읽어들임
const home = require("./src/routes/home"); // 상대경로

/// 앱 셋팅 
app.set("views", "./src/views");
app.set("view engine", "ejs"); // views 폴더 내부를 어떤 엔진을 이용하여 해석할 것인지

// 미들웨어 등록
app.use(express.static(`${__dirname}/src/public`)); // __dirname: app.js 파일의 위치를 반환하는데, 그 안에 있는 public 경로를 정적 경로로 추가함 public/js/home/login.js 에 접근 가능하게 됨
app.use(bodyParser.json());
// URL 을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", home); // use -> 미들웨어를 등록해주는 메서드. 
 
module.exports = app;
// ./bin/www.js 파일로 이동
// /// 서버 띄우는 코드 
// app.listen(PORT, function () {
//     console.log("서버 가동");
// });

