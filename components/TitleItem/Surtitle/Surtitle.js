import styles from '../TitleItem.module.css';

import { nanoid } from 'nanoid';

const Surtitle = ( {surtitle, isInverted} ) => {

    const colorClassName = isInverted ? styles.white : styles.black;

    let surtitleElements = null; 

    if (surtitle !== undefined) {
        if (typeof(surtitle) === 'object' && surtitle !== null){
            surtitleElements = surtitle.map(( singleSurtitle ) => (
                <div 
                    key={singleSurtitle + nanoid}
                    className={styles.singleSurtitle}>
                    {singleSurtitle}
                </div>
            ))
        } 
        else if (typeof(surtitle) === 'string') {
            surtitleElements = surtitle
        }
    }

    return <div 
        className={`${styles.surtitle} ${colorClassName}`} >
        {surtitleElements}
    </div>;
};

export default Surtitle;