import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/pages/Page.module.css';
import splitLayoutStyles from '../../components/SplitLayout/SplitLayout.module.css';
import { useState, useEffect } from 'react';
import { getSlugsOfPosts, getDataOfPosts } from '../../api/api';

// import ReactGA from 'react-ga';
import { nanoid } from 'nanoid';

import NavigationBar from '../../components/Navigation/NavigationBar';
import SplitLayout from '../../components/SplitLayout/SplitLayout';
import HtmlHead from '../../components/HtmlHead/HtmlHead';
import LeftSide from '../../components/SplitLayout/LeftSide/LeftSide';
import RightSide from '../../components/SplitLayout/RightSide/RightSide';
import MenuTitle from '../../components/MenuTitle/MenuTitle';
import TitleItem from '../../components/TitleItem/TitleItem';
import Block from '../../components/Blocks/Block';
import RelatedItems from '../../components/Blocks/RelatedItems/RelatedItems';

import {
  blogPostSlug,
  blogPostApiSlug,
} from '../../components/Navigation/MenuItems';

let pageTitle = null;
// const menuItem = blogMenuItem;
const pageSlug = blogPostSlug;
const apiSlug = blogPostApiSlug;

export const getStaticPaths = async () => {
  const paths = await getSlugsOfPosts(apiSlug);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postsData = await getDataOfPosts(apiSlug);
  const postData = postsData.find((x) => x.slug === params.id);

  return {
    props: {
      postData,
    },
  };
};

export const BlogPost = ({ postData }) => {
  // Split Layout Resizing
  const [sideSize, setSideSize] = useState();
  const updateSideSize = (leftSideSize) => {
    setSideSize(leftSideSize);
  };

  useEffect(() => {
    // // Google Analytics
    // ReactGA.initialize('');
    // ReactGA.pageview(pageSlug + '/' + postData.slug);

    setSideSize(0);
  }, []);

  let pageTitle = postData.title;

  return (
    <div className={`${styles.siteBody} ${splitLayoutStyles.subpage}`}>
      <HtmlHead pageTitle={pageTitle} />

      <NavigationBar />
      <SplitLayout passSizeToParentOnDrag={updateSideSize} isSubpage>
        <LeftSide>
          <TitleItem
            title={postData.title}
            surtitle={postData.surtitle}
            // backButtons={menuItem}
            imageUrl={
              postData.coverimage !== null ? postData.coverimage.url : null
            }
            isInverted={postData.isInverted}
            isFullscreen
          />
        </LeftSide>
        <RightSide>
          {postData.blocks.map((postDataBlock) => (
            <Block
              key={nanoid()}
              blockType={postDataBlock.__component}
              content={postDataBlock}
            />
          ))}

          <RelatedItems
            includedBlogPosts={postData.included_blog_posts}
            relatedNewsPosts={postData.included_in_news}
            relatedAuthors={postData.included_in_authors}
            relatedPhotos={postData.included_in_photos}
            relatedFormats={postData.included_in_formats}
          />
        </RightSide>
      </SplitLayout>
    </div>
  );
};

export default BlogPost;
