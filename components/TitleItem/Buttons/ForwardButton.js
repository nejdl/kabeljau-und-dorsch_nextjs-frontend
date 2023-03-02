import Link from 'next/link';

import { nanoid } from 'nanoid';

import styles from './Buttons.module.css';

const ForwardButton = ({ forwardButton }) => {

    let forwardButtonElement = null;

    if(forwardButton){
        return <div className={styles.forwardButton}>
            {forwardButton}
            <img className={styles.arrowImg} src='/assets/arrow.svg' />
        </div>;
    }

    return (forwardButtonElement);
};

export default ForwardButton;