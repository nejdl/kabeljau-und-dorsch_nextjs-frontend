import PropTypes from 'prop-types';

import Infobox from './Infobox/Infobox';
import Text from './Text/Text';
import Quote from './Quote/Quote';
import Image from './Image/Image';
import Audio from './Audio/Audio';
import Video from './Video/Video';
import Link from './LinkText/LinkText';
import Download from './Download/Download';
import AuthorBio from './AuthorBio/AuthorBio';

const Block = ({blockType, content}) => {
    switch(blockType) {
        case 'blocks.infobox':
            return <Infobox content={content} />;
        case 'blocks.text':
            return <Text content={content} />;
        case 'blocks.zitat':
            return <Quote content={content} />;
        case 'blocks.bild':
            return <Image content={content} />;
        case 'blocks.audio':
            return <Audio content={content} />;
        case 'blocks.youtube':
            return <Video content={content} />;
        case 'blocks.link':
            return <Link content={content} />;
        case 'blocks.download':
            return <Download content={content} />;
        case 'blocks.author-bio':
            return <AuthorBio content={content} />;
        default: 
            return <p>no blocktype matched{blockType}</p>;
    }
}

export default Block; 

Block.propTypes = {
    blockType: PropTypes.oneOf(['blocks.infobox', 'blocks.text', 'blocks.zitat', 'blocks.bild', 'blocks.audio', 'blocks.youtube', 'blocks.link', 'blocks.download', 'blocks.author-bio']),
}