import React, {useEffect, useState} from 'react';
import './App.css';
import MainHeader from "./components/SideEffect/MainHeader";
import Login from "./components/SideEffect/Login";
import Home from "./components/SideEffect/Home"


const App = () => {

    const [isLoggedIn, setIsloggedIn] = useState(false);


    useEffect(() => {
        console.log('로그인 검사 수행!');
        const storedLoginFlag = localStorage.getItem('login-flag');
        if (storedLoginFlag==='1') {
            setIsloggedIn(true);
            }
        }, []);


    const loginHandler = (email, password) => {

        localStorage.setItem('local-flag', '1');
        setIsloggedIn(true);
    }

    const logoutHandler = () => {
        localStorage.removeItem('local-flag');
        setIsloggedIn(false);
    };

    return (
        <>
            <MainHeader onLogout={logoutHandler} />
            <main>
                {isLoggedIn && <Home />}
                {isLoggedIn && <Login onLogin={loginHandler} />}
            </main>
        </>
    );
};

export default App;
