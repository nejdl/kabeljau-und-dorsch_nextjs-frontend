import styles from './Video.module.css';

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

const Video = ({content}) => {
    const videoId = youtube_parser(content.url);
    const videoUrl = 'https://youtube.com/embed/' + videoId;

    const videoSubtitle = content.subtitle;

    return (
        <div className={styles.video}>
            <iframe id="player" type="text/html"
                src={videoUrl}
                frameBorder="0"></iframe>
            <p>{videoSubtitle}</p>
        </div>
    );
};

export default Video;