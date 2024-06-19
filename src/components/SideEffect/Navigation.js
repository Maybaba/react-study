import React from 'react';
import styles from'./Navigation.module.css'
import AuthContext from "../../store/auth-context";

const Navigation = ({ onLogout }) => {

    const loginPage = (
        // 리액트에서 변수에 저장 할 때도 프래그먼트, 전체를 붂는 태그가 필요하다.
        <>
            <li>
                <a href="/">MyPage</a>
            </li>

            <li>
                <a href="/">Admin</a>
            </li>

            <li>
                <button onClick={onLogout}>Logout</button>
            </li>
        </>
    );

      let anonymousPage = <li> <button>Sign up</button></li>

    return (
        <AuthContext.Consumer>
            {({isLoggedIn}) => {
                // console.log(context);
                return (
                    <nav className={styles.nav}>
                        <ul>
                            {isLoggedIn ? loginPage : anonymousPage}
                        </ul>
                    </nav>
                );
            }}
        </AuthContext.Consumer>
    );
};

export default Navigation;