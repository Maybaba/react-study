import React from 'react';
import styles from './CartModal.module.scss';

const ModalOverlay = ({ children }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{children}</div>
        </div>
    );
};

//아악 모르겠어..... ㅜㅜ 구조가 너무 어려워.. 여기는 다시 만들어 봐야 겠다
const CartModal = ({ children, onClose }) => {
    return (
        <>
        <div className="styles.backdrop"  onClick={onClose} />
        <ModalOverlay>
            {children}
        </ModalOverlay>
        </>
    );
};

export default CartModal;
