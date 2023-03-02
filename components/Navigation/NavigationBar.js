import Link from 'next/link';
import { useRouter } from "next/router";

import { newsMenuItem, newsMenuItemSlug, authorsMenuItem, authorsMenuItemSlug, photosMenuItem, photosMenuItemSlug, formatsMenuItem, formatsMenuItemSlug, aboutUsMenuItem, aboutUsMenuItemSlug, contactMenuItem, contactMenuItemSlug, imprintMenuItem, dsvgoMenuItem, instagramMenuItem, facebookMenuItem } from '../Navigation/MenuItems';
import { transformMenuItemToSlug } from '../Navigation/MenuItems';

import styles from './NavigationBar.module.css';
import indexStyles from '../../styles/pages/Page.module.css';

const NavigationBar = (props) => {

    // get current path
    const router = useRouter();

    // get current menu item from path
    const currentMenuItemSlugArray = useRouter().pathname.split("/");
    const currentMenuItemSlug = currentMenuItemSlugArray[1];

    const handleMobileMenuClick = () => {
        // calculate variable vh for mobile
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // hide/show mobile full screen menu
        const menuItemsContainer = document.getElementsByClassName(styles.menuItemsContainer)[0];
        menuItemsContainer.classList.toggle(styles.hideMobileMenu);

        // de/select mobile menu button
        const mobileMenuItemsContainer = document.getElementsByClassName(styles.mobileMenuItemsContainer)[0];
        mobileMenuItemsContainer.classList.toggle(styles.selected);

        // hide splitLayoutIcon
        hideSplitLayoutIcon();
    }

    const hideMobileMenuWhenClickingOnCurrentItem = (thisMenuItem) => {
        if (currentMenuItemSlug === transformMenuItemToSlug(thisMenuItem)){
            // hide/show mobile full screen menu
            const menuItemsContainer = document.getElementsByClassName(styles.menuItemsContainer)[0];
            menuItemsContainer.classList.toggle(styles.hideMobileMenu);
        }
    }

    const hideSplitLayoutIcon = () => {
        const splitLayoutIcon = document.getElementsByClassName(indexStyles.splitLayoutIcon)[0];
        if (splitLayoutIcon !== undefined){
            splitLayoutIcon.style.opacity = 0;
        }
    }

    return (
        <nav className={styles.navBar}>
            <ul className={styles.logo}>
                <Link href='/'>
                    <a>
                        <li className={router.pathname == '/' ? styles.selected : ''}>
                                Kabeljau
                        </li>
                    </a>
                </Link>
                <Link href='/'>
                    <a>
                        <li 
                            id={styles.logoSecondPart}
                            className={router.pathname == '/' ? styles.selected : ''}>
                                &amp;Dorsch
                        </li>
                    </a>
                </Link>
                <div className={styles.mobileMenuItemsContainer}>
                    <li onClick={handleMobileMenuClick} className={styles.menuItems} >
                        Menu
                    </li>
                </div>
                <div className={`${styles.menuItemsContainer} ${styles.hideMobileMenu}`}>
                    <Link href={'/' + newsMenuItemSlug}>
                        <a>
                            <li onClick={() => hideMobileMenuWhenClickingOnCurrentItem(newsMenuItem)} className={currentMenuItemSlug === newsMenuItemSlug ? `${styles.selected} ${styles.menuItems}` : styles.menuItems}>
                                    {newsMenuItem}
                            </li>
                        </a>
                    </Link>
                    <Link href={'/' + authorsMenuItemSlug}>
                        <a>
                            <li onClick={() => hideMobileMenuWhenClickingOnCurrentItem(authorsMenuItem)} className={currentMenuItemSlug === authorsMenuItemSlug ? `${styles.selected} ${styles.menuItems}` : styles.menuItems}>
                                {authorsMenuItem}
                            </li>
                        </a>
                    </Link>
                    <Link href={'/' + photosMenuItemSlug}>
                        <a>
                            <li onClick={() => hideMobileMenuWhenClickingOnCurrentItem(photosMenuItem)} className={currentMenuItemSlug === photosMenuItemSlug ? `${styles.selected} ${styles.menuItems}` : styles.menuItems}>
                                {photosMenuItem}
                            </li>
                        </a>
                    </Link>
                    <Link href={'/' + formatsMenuItemSlug}>
                        <a>
                            <li onClick={() => hideMobileMenuWhenClickingOnCurrentItem(formatsMenuItem)} className={currentMenuItemSlug === formatsMenuItemSlug ? `${styles.selected} ${styles.menuItems}` : styles.menuItems}>
                                {formatsMenuItem}
                            </li>
                        </a>
                    </Link>
                    <Link href={'/' + aboutUsMenuItemSlug}>
                        <a>
                            <li onClick={() => hideMobileMenuWhenClickingOnCurrentItem(aboutUsMenuItem)} className={currentMenuItemSlug === aboutUsMenuItemSlug ? `${styles.selected} ${styles.menuItems}` : styles.menuItems}>
                                {aboutUsMenuItem}
                            </li>
                        </a>
                    </Link>
                    <Link href={'/' + contactMenuItemSlug}>
                        <a>
                            <li onClick={() => hideMobileMenuWhenClickingOnCurrentItem(contactMenuItem)} className={currentMenuItemSlug === contactMenuItemSlug ? `${styles.selected} ${styles.menuItems}` : styles.menuItems}>
                                {contactMenuItem}
                            </li>
                        </a>
                    </Link>
                </div>
            </ul>
        </nav>
    )
}

export default NavigationBar;