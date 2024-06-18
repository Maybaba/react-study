import React, { useEffect, useState } from 'react';
import './App.css';
import MainHeader from "./components/SideEffect/MainHeader";
import Login from "./components/SideEffect/Login";
import Home from "./components/SideEffect/Home"

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log('로그인 검사 수행!');
        const storedLoginFlag = localStorage.getItem('login-flag');
        if (storedLoginFlag === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem('login-flag', '1');  // Fixing the localStorage key
        setIsLoggedIn(true);
    }

    const logoutHandler = () => {
        localStorage.removeItem('login-flag');  // Fixing the localStorage key
        setIsLoggedIn(false);
    };

    return (
        <>
            <MainHeader onLogout={logoutHandler} />
            <main>
                {isLoggedIn ? <Home /> : <Login onLogin={loginHandler} />}
            </main>
        </>
    );
};

export default App;
