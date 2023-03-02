import Link from 'next/link';

import { newsMenuItem, newsMenuItemSlug, authorsMenuItem, authorsMenuItemSlug, photosMenuItem, photosMenuItemSlug, formatsMenuItem, formatsMenuItemSlug, blogPostSlug } from '../../Navigation/MenuItems';
import TitleItem from '../../TitleItem/TitleItem';
import { sortBySortingDate } from '../../Filters/SortBySortingDate';

import styles from './RelatedItems.module.css';

const RelatedItems = ({ includedBlogPosts, relatedNewsPosts, relatedAuthors, relatedPhotos, relatedFormats }) => {

    if(relatedPhotos.length !== 0){
        // sort photos by date
        sortBySortingDate(relatedPhotos);
    }

    return (
        <div className={styles.relatedItemsContainer}>
            {includedBlogPosts.length !== 0
            && includedBlogPosts.map(( includedBlogPost ) => (
                <Link 
                    key={includedBlogPost.id}
                    href={'/' + blogPostSlug + '/' + includedBlogPost.slug} >
                    <a className={styles.relatedLink} >
                        <TitleItem
                            title={includedBlogPost.title}
                            surtitle={includedBlogPost.surtitle}
                            forwardButton={null}
                            imageUrl={(includedBlogPost.coverimage === null) ? null : includedBlogPost.coverimage.url}
                            isInverted={includedBlogPost.isInverted} />
                    </a>
                </Link>
            ))
            }
            {relatedNewsPosts.length !== 0
            && relatedNewsPosts.map(( relatedNewsPost ) => (
                <Link 
                    key={relatedNewsPost.id}
                    href={'/' + newsMenuItemSlug + '/' + relatedNewsPost.slug} >
                    <a className={styles.relatedLink} >
                        <TitleItem
                            title={relatedNewsPost.title}
                            surtitle={relatedNewsPost.surtitle}
                            forwardButton={newsMenuItem}
                            imageUrl={(relatedNewsPost.coverimage === null) ? null : relatedNewsPost.coverimage.url}
                            isInverted={relatedNewsPost.isInverted} />
                    </a>
                </Link>
            ))}
            {relatedAuthors.length !== 0
            && relatedAuthors.map(( relatedAuthor ) => (
                <Link 
                    key={relatedAuthor.id}
                    href={'/' + authorsMenuItemSlug + '/' + relatedAuthor.slug} >
                    <a className={styles.relatedLink} >
                        <TitleItem
                            title={`${relatedAuthor.surname}  ${relatedAuthor.name}`}
                            surtitle={relatedAuthor.surtitle}
                            forwardButton={authorsMenuItem}
                            imageUrl={(relatedAuthor.coverimage === null) ? null : relatedAuthor.coverimage.url}
                            isInverted={relatedAuthor.isInverted} />
                    </a>
                </Link>
            ))}
            {relatedFormats.length !== 0
            && relatedFormats.map(( relatedFormat ) => (
                <Link 
                    key={relatedFormat.id}
                    href={'/' + formatsMenuItemSlug + '/' + relatedFormat.slug} >
                    <a className={styles.relatedLink} >
                        <TitleItem
                            title={relatedFormat.title}
                            surtitle={relatedFormat.surtitle}
                            forwardButton={formatsMenuItem}
                            imageforwardButtonUrl={(relatedFormat.coverimage === null) ? null : relatedFormat.coverimage.url}
                            isInverted={relatedFormat.isInverted} />
                    </a>
                </Link>
            ))}
            {relatedPhotos.length !== 0
            && relatedPhotos.map(( relatedPhoto ) => (
                <Link 
                    key={relatedPhoto.id}
                    href={'/' + photosMenuItemSlug + '/' + relatedPhoto.slug} >
                    <a className={styles.relatedLink} >
                        <TitleItem
                            title={relatedPhoto.title}
                            surtitle={relatedPhoto.surtitle}
                            forwardButton={photosMenuItem}
                            imageUrl={(relatedPhoto.coverimage === null) ? null : relatedPhoto.coverimage.url}
                            isInverted={relatedPhoto.isInverted} />
                    </a>
                </Link>
            ))}
        </div>
    );

};

export default RelatedItems;