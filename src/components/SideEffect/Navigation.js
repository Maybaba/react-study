import React from 'react';
import styles from'./Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <l1>
                    <a href="/">MyPage</a>
                </l1>

                <l1>
                    <a href="/">Admin</a>
                </l1>

                <l1>
                    <a href="/">Logout</a>
                </l1>

            </ul>


        </nav>
    );
};

export default Navigation;