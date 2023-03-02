import styles from '../SplitLayout.module.css';

import Footer from './Footer/Footer'

const RightSide = ({ children, hideFooter, passSizeToChildOnDrag }) => {

    return (
        <div className={styles.side}>
            {children}
            {!hideFooter && <Footer passSizeToFooterOnDrag={passSizeToChildOnDrag} />}
        </div>
    )
}

export default RightSide;