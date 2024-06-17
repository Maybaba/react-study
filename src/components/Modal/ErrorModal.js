import React from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './ErrorModal.module.css';
//포찰을 사용하기 위한 리액트 돔 불러오기
import ReactDOM from "react-dom";

//컴포넌트
const BackDrop = ({onClose}) => {
    return (
        <div className={styles.backdrop} onClick={onClose}></div>
    );
};

const ModalOverlay = ({ title, message, onClose}) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{title}</h2>
            </header>
            <div className={styles.content}>
                <p>{message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={onClose}>Okay</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = ({title, message, onClose}) => {
    return (
        <>
            {
                ReactDOM.createPortal(
                    <BackDrop onClose={onClose} />
                    , document.getElementById('backdrop-root')
                )
            }
            {
                ReactDOM.createPortal(
                    <ModalOverlay title={title} message={message} onClose={onClose} />
                    , document.getElementById('overlay-root')
                )
            }


        </>
    );
};

export default ErrorModal;

