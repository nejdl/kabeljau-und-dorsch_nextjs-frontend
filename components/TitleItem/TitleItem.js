import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { mediaQueryMobile } from '../../styles/globals/breakpoints';

import Surtitle from './Surtitle/Surtitle';
import BackButtons from './Buttons/BackButtons';
import ForwardButton from './Buttons/ForwardButton';
import Title from './Title/Title';

import styles from './TitleItem.module.css';
import { backendUrl } from '../../api/backendurl';

const TitleItem = ( {title, surtitle, backButtons, forwardButton, isInverted, isFullscreen, imageUrl} ) => {
    
    let backgroundImageElement = null;
    if(imageUrl){
        backgroundImageElement = <img 
            className={ isFullscreen ? `${styles.backgroundImageFullscreen}` : `${styles.backgroundImage}` } 
            src={backendUrl + imageUrl} />
    }

    const isMobile = useMediaQuery({ 
        query: mediaQueryMobile
    })

    /* hack to avoid white edges on mobile when images are blurred */
    useEffect(() => {
        if (isMobile){

            const backgroundImageFullscreen = document.getElementsByClassName(styles.backgroundImageFullscreen)[0];
            if (backgroundImageFullscreen !== undefined){
                backgroundImageFullscreen.style.filter = 'blur(10px)';
                backgroundImageFullscreen.style.transition = 'filter 1s ease-in-out';
                setTimeout(() => { 
                    backgroundImageFullscreen.style.transition = 'none';
                }, 1500);
            }
       
            const backgroundImages = document.getElementsByClassName(styles.backgroundImage);
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

    return (
        <div className={ isFullscreen ? `${styles.container} ${styles.fullscreen}` : `${styles.container}` } >
            {backgroundImageElement}
            <BackButtons
                backButtons={backButtons} />
            <ForwardButton
                forwardButton={forwardButton} />
            <Surtitle 
                surtitle={surtitle}
                isInverted={isInverted} />
            <Title 
                title={title}
                isInverted={isInverted} />
        </div>
    )
}

export default TitleItem;