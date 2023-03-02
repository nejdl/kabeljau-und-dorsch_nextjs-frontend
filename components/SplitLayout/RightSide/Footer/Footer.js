import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

import { imprintMenuItem, imprintMenuItemSlug, dsvgoMenuItem, dsvgoMenuItemSlug, instagramMenuItem, instagramUrl, facebookMenuItem, facebookUrl, newsletterMenuItem, newsletterUrl } from '../../../Navigation/MenuItems';

import styles from './Footer.module.css';

const Footer = ( props ) => {

    const [isFooterHorizontal, setIsFooterHorizontal] = useState(false);

    // get current path
    const router = useRouter();

    // get current menu item from path
    const currentMenuItemSlugArray = router.pathname.split("/");
    const currentMenuItemSlug = currentMenuItemSlugArray[1];

  useEffect(() => {
    const footer = document.getElementById('footer');

    if (footer.offsetWidth < 560){
        setIsFooterHorizontal(true);
    } else {
        setIsFooterHorizontal(false);
    }

  }, [props.passSizeToFooterOnDrag])

    return (
        <div 
            id='footer'
            className={isFooterHorizontal ? `${styles.footer} ${styles.horizontalFooter}` : styles.footer}>
            <ul>
                {/* INSTAGRAM */}
                <li>
                    <a href={instagramUrl}>{instagramMenuItem}</a>
                </li>
                {/* FACEBOOK */}
                <li>
                    <a href={facebookUrl}>{facebookMenuItem}</a>
                </li>
                {/* NEWSLETTER */}
                <li>
                    <a href={newsletterUrl}>{newsletterMenuItem}</a>
                </li>
                {/* DSVGO */}
                {/* <li className={currentMenuItemSlug === dsvgoMenuItemSlug ? styles.selected : ''}>
                    <Link href={'/' + dsvgoMenuItemSlug}>
                        <a>{dsvgoMenuItem}</a>
                    </Link>
                </li> */}
                {/* IMPRINT */}
                <li 
                    className={currentMenuItemSlug === imprintMenuItemSlug ? styles.selected : ''}>
                    <Link href={'/' + imprintMenuItemSlug}>
                        <a>{imprintMenuItem}</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer;