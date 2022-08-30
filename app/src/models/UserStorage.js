"use strict";

/// class 로 선언하되, 파일명과 동일하게 하는 클래스명을 사용하는 것을 권장
class UserStorage {
/* 
    + class 내부에서 변수 선언 시, const 와 같은 선언자 불필요!

    + UserStorage class 자체에서 users 에 접근하고 싶은 경우, users 를 static(정적 변수)으로 선언

    + 외부에서 UserStorage 의 users 에 직접 접근이 가능하면 안되므로,
      은닉화 과정이 필요함 => #users => 외부에서 users 정보를 가져올 수 없음(public -> private)

    + 그럼 로그인 시, 어떻게 정보를 불러와야하나? -> getUsers() 메소드!
      메소드 역시, class 자체에서 메소드를 호출하기 위해서는 static 으로 선언돼야 함.


*/
    static #users = {
        id: ["aae1", "aae12", "aae123"],
        psword: ["1", "1", "1"],
        name: ["이승환", "김종선", "이정환"],
    };

/*
+ newUsers : fields 배열의 초깃값이 들어간다.
+ field : 초깃값 이후에 들어오는 값들
+ {}: 오브젝트로 선언하여 초깃값 지정 가능

*/
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            // hasOwnProperty : users 에 field 에 해당하는 키 값이 있는지 알아보는 메소드
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {}); 
        return newUsers; 
    }
}

module.exports = UserStorage;