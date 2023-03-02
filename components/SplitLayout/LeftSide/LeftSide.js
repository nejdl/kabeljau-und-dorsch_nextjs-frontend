import styles from '../SplitLayout.module.css';

const LeftSide = ( props ) => {
    return (
        <div className={styles.side}>
                {props.children}
        </div>
    )
}

export default LeftSide;