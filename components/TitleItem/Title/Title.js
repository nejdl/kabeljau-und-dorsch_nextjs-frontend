import ReactFitText from 'react-fittext';

import { titleFontSizeCompressorValue } from '../../../styles/globals/sizes';
import styles from '../TitleItem.module.css';

const Title = ( {title, isInverted} ) => {
    const colorClassName = isInverted ? styles.white : styles.black;

    return (
        <ReactFitText 
            compressor={titleFontSizeCompressorValue} >
            <h2 className={`${styles.title} ${colorClassName}`}>
                {title}
            </h2>
        </ReactFitText>
    )
}

export default Title; 