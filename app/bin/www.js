"use strict";
/// 상위 폴더로 이동하여 app.js 파일에 접근
/// 단, 여기서 끝나지 않고, app.js 파일에서도 app 을 exports 해주는 과정이 필요
const app = require("../app");

const PORT = 3000;

/// 서버 띄우는 코드
app.listen(PORT, () => {
    console.log("서버 가동");   
});