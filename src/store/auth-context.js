
//로그인 관련 상태데이터들을 중앙집중 관리하는 파일
import React from "react";
// 컨텍스트는 데이터 중앙저장소 - 생성 시 관리할 기본데이터를 명시
// 데이터 값은 타입 기본값을 명시
const AuthContext = React.createContext(
    {
        isLoggedIn: false, //타입만 명시하기
        onLogout: () => {}, //타입을 맞춰놓으면 자동완성이 뜸. 아까 내가 쳤을때 뜬 거처럼 ㅋㅋ
    }

);

export default AuthContext;