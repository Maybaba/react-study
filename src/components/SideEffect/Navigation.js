import React, {useState} from 'react';
import styles from'./Navigation.module.css'
import AuthContext from "../../store/auth-context";

const Navigation = () => {

    const loginPage = (onLogout) => (
        // 리액트에서 변수에 저장 할 때도 프래그먼트, 전체를 묶는 태그가 필요하다.
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

    const anonymousPage = <li>
        <button>Sign up</button>
    </li>

    const {isLoggedIn, onLogout} = useState(AuthContext);

    return (
        <nav className={styles.nav}>
            <ul>
                {isLoggedIn ? loginPage(onLogout) : anonymousPage}
            </ul>
        </nav>
    );
};



export default Navigation;