import styles from '../Text/Text.module.css';

const Quote = ({content}) => {
    const quoteText = content.quote;
    const quoteSource = content.source;

    return (
        <div className={styles.quote}>
            <div className={`${styles.quoteText} ${styles.text}`}>
                {quoteText}
            </div>
            <div className={styles.quoteSource}>
                {quoteSource}
            </div>
        </div>
    );
};

export default Quote;