import { backendUrl } from '../../../api/backendurl';
import styles from './Download.module.css';
import textStyles from '../Text/Text.module.css';

const Download = ({content}) => {
    const downloadUrl = backendUrl + content.file.url;
    const downloadAltText = content[1];
    const downloadSubtitle = content.title;

    return (
        <div 
            className={`${styles.download} ${textStyles.downloadText} ${textStyles.text}`}>
            <a 
                href={downloadUrl} >
                <img 
                    src='/assets/download.svg' />
            </a>
            <a 
                href={downloadUrl} >
                <div className={styles.downloadText} >
                    {downloadSubtitle}
                </div>
            </a>
        </div>
    )
};

export default Download;