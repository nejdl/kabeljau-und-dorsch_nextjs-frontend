import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/pages/Page.module.css';
import { useState, useEffect } from 'react';
import { getDataOfPosts } from '../api/api';

// import ReactGA from 'react-ga';

import { formatsMenuItem } from '../components/Navigation/MenuItems';
import { transformMenuItemToSlug } from '../components/Navigation/MenuItems';
import { transformMenuItemToApiSlug } from '../components/Navigation/MenuItems';
import { sortBySortingDate } from '../components/Filters/SortBySortingDate';

import HtmlHead from '../components/HtmlHead/HtmlHead';
import NavigationBar from '../components/Navigation/NavigationBar';
import SplitLayout from '../components/SplitLayout/SplitLayout';
import LeftSide from '../components/SplitLayout/LeftSide/LeftSide';
import RightSide from '../components/SplitLayout/RightSide/RightSide';
import MenuTitle from '../components/MenuTitle/MenuTitle';
import TitleItem from '../components/TitleItem/TitleItem';
import Block from '../components/Blocks/Block';

let pageTitle = formatsMenuItem;
const pageSlug = transformMenuItemToSlug(pageTitle);
const apiSlug = transformMenuItemToApiSlug(pageTitle);

export const getStaticProps = async () => {
  const posts = await getDataOfPosts(apiSlug);

  return {
    props: {
      posts,
    },
  };
};

const FormatePage = ({ posts }) => {
  // sort photos by date
  sortBySortingDate(posts);

  // Split Layout Resizing
  const [sideSize, setSideSize] = useState();
  const updateSideSize = (leftSideSize) => {
    setSideSize(leftSideSize);
  };
  useEffect(() => {
    // // Google Analytics
    // ReactGA.initialize('');
    // ReactGA.pageview(pageSlug);

    setSideSize(0);
  }, []);

  return (
    <div className={styles.siteBody}>
      <HtmlHead pageTitle={pageTitle} />

      <NavigationBar />
      <SplitLayout passSizeToParentOnDrag={updateSideSize}>
        <LeftSide>
          <MenuTitle title={pageTitle} compressorValue={0.395} />
        </LeftSide>
        <RightSide passSizeToChildOnDrag={updateSideSize}>
          {posts.map(
            ({ id, title, surtitle, slug, coverimage, isInverted }) => (
              <Link href={pageSlug + '/' + slug} key={id}>
                <a className={styles.TitleItemLink}>
                  <TitleItem
                    title={title}
                    surtitle={surtitle}
                    imageUrl={coverimage !== null ? coverimage.url : null}
                    isInverted={isInverted}
                  />
                </a>
              </Link>
            )
          )}
        </RightSide>
      </SplitLayout>
    </div>
  );
};

export default FormatePage;
