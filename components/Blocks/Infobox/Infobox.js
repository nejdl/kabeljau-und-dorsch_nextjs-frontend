const ReactMarkdown = require('react-markdown');
import styles from '../Text/Text.module.css';

const Infobox = ({content}) => {
    const infoboxText = content.infobox;

    return (
        <div className={styles.infoText}>
            <ReactMarkdown>{infoboxText}</ReactMarkdown>
        </div>
    )
};

export default Infobox;