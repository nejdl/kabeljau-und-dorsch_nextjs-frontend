import styles from './Image.module.css';
import { backendUrl } from '../../../api/backendurl';

const Image = ({content}) => {
    
    if (content.image !== null){
        const imageUrl = backendUrl + content.image.url;
        const isFullWidth = (content.width === 'volleBreite');
        const imageAltText = content.alttext;
        const imageSubtitle = content.title;

        return (
            <div className={ isFullWidth ? `${styles.fullWidth}` : `${styles.halfWidth}` } >
                <img src={imageUrl} alt={imageAltText} />
                {imageSubtitle !== null && imageSubtitle.trim() !== ''
                    && <div className={styles.imageSubtitle}>{imageSubtitle}</div>
                }
            </div>
        );
    } else {
        return null;
    }
};

export default Image;