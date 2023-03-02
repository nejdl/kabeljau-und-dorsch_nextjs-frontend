import styles from '../Text/Text.module.css';
const ReactMarkdown = require('react-markdown');

const AuthorBio = ({content}) => {
    const text = content.text;
    
    return (
        <div className={`${styles.text} ${styles.authorBio}`}>
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    )
};

export default AuthorBio;