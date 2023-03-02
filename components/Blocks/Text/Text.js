import styles from './Text.module.css';

const ReactMarkdown = require('react-markdown');

const Text = ({content}) => {
    const text = content.text;
    
    return (
        <div className={styles.text}>
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    )
};

export default Text;