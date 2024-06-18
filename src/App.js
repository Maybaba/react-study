import React, { useState } from 'react';
import './App.css';
import MainHeader from "./components/SideEffect/MainHeader";
import Login from "./components/SideEffect/Login";
import Home from "./components/SideEffect/Home"


const App = () => {

    //현재 로그인 상태를 체크하는 변수
    const [isLoggedIn, setIsloggedIn] = useState(false);

    console.log('로그인 검사 수행!');
    //localStorage 에서 login-flag 꺼냄
    const storedLoginFlag = localStorage.getItem('login-flag');
    //로그인 검사를 초기에만 수행
    if (storedLoginFlag==='1') { //로그인을 했다면
        //상태 변수가 setter로 변경되면
        //리액트는 변경 감지 후 바로 리렌더링을 수행한다. (화면에 다시 불러온다. )

        setIsloggedIn(true); //로그인 플래그를 확인해서 true로 바꿔준다.
    }

    // 왜 여기서 로그인 핸들러를 만드는거지?
    // 서버 통신은 중앙집중 관리가 중요함 : 프론트 -> 백 -> 디비
    // 데이터는 상위에서 모아서 한번에 전송하기 위한 전략임
    const loginHandler = (email, password) => {
        //로그인의 증거 쿠키, 세션이 있다.

        //로그인의 증거로 클라이언트에 1이라는 숫자를 기록 : access token : 쿠키와 세션 두가지의 이점을 활용한다.
        localStorage.setItem('local-flag', '1');
        setIsloggedIn(true);
    }

    return (
        <>
            <MainHeader />
            <main>
                {isLoggedIn && <Home />}
                {isLoggedIn && <Login onLogin={loginHandler} />}
            </main>
        </>
    );
};

export default App;
