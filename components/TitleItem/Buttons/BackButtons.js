import Link from 'next/link';

import { nanoid } from 'nanoid';

import styles from './Buttons.module.css';
import { transformMenuItemToSlug } from '../../Navigation/MenuItems';

const BackButtons = ({ backButtons }) => {

    let backButtonElements = null;

    if(backButtons){
        if(backButtons.length < 1){
            backButtonElements = backButtons.map((backButtonTitle) => { 
                const backButtonSlug = transformMenuItemToSlug(backButtonTitle);  
                return <Link href={'/' + backButtonSlug}>
                        <a className={styles.backButtonLink}>
                            <div className={styles.backButton} key={nanoid()}>
                                <img className={styles.arrowImg} src='/assets/arrow.svg' />
                                {backButtonTitle}
                            </div>
                        </a>
                    </Link>;
            })
        }  else {
                const backButtonSlug = transformMenuItemToSlug(backButtons);
                return <Link href={'/' + backButtonSlug}>
                        <a className={styles.backButtonLink}>
                            <div className={styles.backButton} key={nanoid()}>
                                <img className={styles.arrowImg} src='/assets/arrow.svg' />
                                {backButtons}
                            </div>
                        </a>
                    </Link>;
        }
    }

    return (backButtonElements);
};

export default BackButtons;