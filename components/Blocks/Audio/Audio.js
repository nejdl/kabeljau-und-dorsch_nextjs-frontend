import { backendUrl } from '../../../api/backendurl';
import styles from './Audio.module.css';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
// AudioPlayer css imported at pages/_app.js

const Audio = ({content}) => {

    
    const audioSubtitle = content.title;
    let AudioPlayerElement = null;

    if (content.mp3 !== null) {
        let audioUrlMp3 = backendUrl + content.mp3.url;
        
        AudioPlayerElement = <AudioPlayer
          src={audioUrlMp3}
          customProgressBarSection={
            [
              RHAP_UI.PROGRESS_BAR,
            ]
          }
          customVolumeControls={[
            <div className={styles.audioSubtitle}>{audioSubtitle}</div>,
            RHAP_UI.CURRENT_TIME,
            <div className={styles.timeSlash}>|</div>,
            RHAP_UI.DURATION
          ]}
          customIcons={{
            play: <img 
              className={styles.playIcon}
              src='/assets/play.svg' />,
            pause: <img 
              className={styles.playIcon}
              src='/assets/pause.svg' />
          }}
          showJumpControls={false}
          customAdditionalControls={[]}
          layout='stacked-reverse'  
        />
    }

    return (
        <> 
          {AudioPlayerElement}
        </>
    );
};

export default Audio;