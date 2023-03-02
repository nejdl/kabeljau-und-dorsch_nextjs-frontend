import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { mediaQueryMobile } from '../../styles/globals/breakpoints';

import ReactFitText from 'react-fittext';
import styles from './MenuTitle.module.css'
import titleStyles from '../TitleItem/TitleItem.module.css'

import { backendUrl } from '../../api/backendurl';

const MenuTitle = ({ compressorValue, title, imageUrl, isInverted, isFullscreen, updateSideSize, addLineHeight }) => {
    const colorClassName = isInverted ? titleStyles.white : titleStyles.black;

    let backgroundImageElement = null;

    if(imageUrl){
        backgroundImageElement = <img 
            className={ isFullscreen ? `${titleStyles.backgroundImageFullscreen}` : `${titleStyles.backgroundImage}` } 
            src={backendUrl + imageUrl} />
    }

    const isMobile = useMediaQuery({ 
        query: mediaQueryMobile
    })
    
    /* hack to avoid white edges on mobile when images are blurred */
    useEffect(() => {
        if (isMobile){

            const backgroundImageFullscreen = document.getElementsByClassName(titleStyles.backgroundImageFullscreen)[0];
            if (backgroundImageFullscreen !== undefined){
                backgroundImageFullscreen.style.filter = 'blur(10px)';
                backgroundImageFullscreen.style.transition = 'filter 1s ease-in-out';
                setTimeout(() => { 
                    backgroundImageFullscreen.style.transition = 'none';
                }, 1500);
            }
       
            const backgroundImages = document.getElementsByClassName(titleStyles.backgroundImage);
            if (backgroundImages !== undefined){
                if (backgroundImages.length > 0){
                    for (let i = 0; i < backgroundImages.length; i++){
                        backgroundImages[i].style.filter = 'blur(10px)';
                        backgroundImages[i].style.transition = 'filter 1s ease-in-out';
                        setTimeout(() => { 
                            backgroundImages[i].style.transition = 'none';
                        }, 1500);
                    }
                }
            }

        }
    }, []);

    const [compressorValueState, setCompressorValueState] = useState(compressorValue);

    // check if automatic font-size scaling is on
    useEffect(() => {
        // get computed font-size of body
        const body = document.getElementsByTagName('body')[0];
        let computedFontSize = window.getComputedStyle(body, null).getPropertyValue('font-size');
        
        // check if computed font-size of body is standard 16px or scaled 
        const fontSizeScaling = (parseFloat(computedFontSize) / 16);

        if (fontSizeScaling > 1 && compressorValueState === compressorValue){
            // scale compressor value as font is scaled
            const newCompressorValue = compressorValueState * fontSizeScaling;
            setCompressorValueState(newCompressorValue);
        }

    }, []);

    return (
        <div className={ isFullscreen ? `${styles.menuContainer} ${titleStyles.container} ${titleStyles.fullscreen}` : `${styles.menuContainer} ${titleStyles.container}` } >
            {backgroundImageElement}
            <ReactFitText 
                // compressor={compressorValue}>   
                compressor={compressorValueState}>   
                    <h1 className={addLineHeight ? `${styles.menuItem} ${styles.menuItemWithDiacritic} ${colorClassName}` : `${styles.menuItem} ${colorClassName}`}>
                        {title}
                    </h1> 
            </ReactFitText>
        </div>
    )
}

export default MenuTitle;