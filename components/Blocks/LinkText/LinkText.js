import Link from 'next/link';
import styles from '../Text/Text.module.css';

const LinkText = ({content}) => {

    let linkUrl = content.url;

    if (!/^https?:\/\//i.test(linkUrl)) {
        linkUrl = 'http://' + linkUrl;
    }

    const linkText = content.linktext;

    return (
        <div
            className={`${styles.linkText} ${styles.text}`} >
            <a href={linkUrl}>
                {linkText}
            </a>
        </div>
    );
};

export default LinkText;