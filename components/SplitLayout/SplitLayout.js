import { useState, useEffect } from 'react';
import Split from 'react-split';
import { useMediaQuery } from 'react-responsive';
import styles from './SplitLayout.module.css';
import indexStyles from '../../styles/pages/Page.module.css';
import { mediaQueryMobile } from '../../styles/globals/breakpoints';

// // random number between min 20 and max 80
// let randomSplitSizeLeft = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
// let randomSplitSizeRight = 100 - randomSplitSizeLeft;

const SplitLayout = ({ children, passSizeToParentOnDrag, randomSplitSize, isSubpage }) => {
    const [splitIsInitialized, setSplitIsInitialized] = useState(false);

    const isMobile = useMediaQuery({ 
        query: mediaQueryMobile
    })

    const passSizeOnDrag = (lefSideSize) => {
        // console.log('[SplitLayout.js] pass size')
        hideSplitLayoutIcon();
        if(!isMobile){
            passSizeToParentOnDrag(lefSideSize, isMobile);
        }
    }

    useEffect(() => {
        setSplitIsInitialized(true);
    }, []);

    const hideSplitLayoutIcon = () => {
        const splitLayoutIcon = document.getElementsByClassName(indexStyles.splitLayoutIcon)[0];
        if (splitLayoutIcon !== undefined){
            splitLayoutIcon.style.opacity = 0;
        }
    }

    return (
        <main className={`${styles.main} ${splitIsInitialized && styles.initialized}`}>
            <Split
                id='splitContainer'
                className={styles.splitContainer}
                sizes={isMobile 
                    ? [35, 65] 
                    : [50, 50]}
                    // : [!randomSplitSize ? 50 : randomSplitSizeLeft, !randomSplitSize ? 50 : randomSplitSizeRight]}
                minSize={isMobile 
                    ? 100
                    : 160}
                expandToMin={true}
                gutterSize={0}
                // if you change gutter size, also change
                // SplitLayout.module.css > .side:first-of-type, .side:last-of-type { width: calc(50% - 5px); }
                // SplitLayout.module.css > .side:first-of-type { margin-right: 10px; }
                // SplitLayout.module.css > .gutter { height: 10px  !important; }
                // SplitLayout.module.css > @media mediaQueryMobile { .gutter { height: 10px !important; } }
                // SplitLayout.module.css > @media mediaQueryMobile { .side:first-of-type { /* margin-bottom: 10px; */ } }
                gutterSize={10}
                gutterAlign="center"
                gutter={(index, direction, pairElement) => {
                    const gutter = document.createElement('div');
                    gutter.className = `${styles.gutter} gutter-${direction}`;
                    return gutter;      
                }}
                // snapOffset={30}
                dragInterval={10}
                direction={isMobile 
                    ? "vertical" 
                    : "horizontal"}
                elementStyle={isMobile 
                    ? (dimension, elementSize, gutterSize) => ({ 'width': '100%', 'height': `calc(${elementSize}% - ${gutterSize}px)`})
                    : (dimension, elementSize, gutterSize) => ({ 'height': '100%', 'width': `calc(${elementSize}% - ${gutterSize}px)`})
                }
                cursor={isMobile 
                    ? "row-resize" 
                    : "col-resize"}
                // add a debounce function to rate limit the callback.
                // onDrag={sizes => {console.log(sizes)}}
                // onDragStart={}
                onDrag={sizes => {
                    passSizeOnDrag(sizes[0]);
                }}
            >
                {children}
            </Split>
        </main>
    )
}

export default SplitLayout; 