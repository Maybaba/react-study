import React, {useEffect, useState} from 'react';

import Card from '../UI/Card';
import styles from './Login.module.css';
import Button from '../UI/Button';

const Login = ({ onLogin }) => {

    console.log('렌더링 수행');

    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    };


    const passwordChangeHandler = (e) => {
        setEnteredPassword(e.target.value);
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };

    //패스워드 입력값이 정상인지 확인하기
    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    //이메일, 패스워드가 둘 다 정상인지 확인하기
    const submitHandler = (e) => {
        e.preventDefault();
        onLogin(enteredEmail, enteredPassword);
    };

    useEffect(() => { //순서는 보장되지 않음. 비동기자나아앙
        console.log('useEffect call in Login.js');
        setFormIsValid(
            enteredPassword.trim().length > 6 && enteredEmail.includes('@') //버튼을 잠글지, 열지 지속적으로 필요하다.
        );
    }, [enteredEmail, enteredPassword]); //이 배열의 용도는 입력된 값을 검증할 때 enteredPassword, enteredEmail 상태변수와 prop을 쓰고 있으면 그 값을 배열에 넣는다.
    //배열에서 dependency가 필요한 경우 터미널에도 넣으라고 쓴다.
    //useEffect에서는 fetch get밖에 안함

    return (
        <Card className={styles.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${styles.control} ${
                        emailIsValid === false ? styles.invalid : ''
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${styles.control} ${
                        passwordIsValid === false ? styles.invalid : ''
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={styles.actions}>
                    <Button type="submit" className={styles.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
