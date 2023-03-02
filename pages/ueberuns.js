import Head from 'next/head';
import styles from '../styles/pages/Page.module.css';
import { useState, useEffect } from 'react';
import { getDataOfPosts } from '../api/api';
import { backendUrl } from '../api/backendurl';

// import ReactGA from 'react-ga';
import { nanoid } from 'nanoid';

import { aboutUsMenuItem } from '../components/Navigation/MenuItems';
import { transformMenuItemToSlug } from '../components/Navigation/MenuItems';
import { transformMenuItemToApiSlug } from '../components/Navigation/MenuItems';

import HtmlHead from '../components/HtmlHead/HtmlHead';
import NavigationBar from '../components/Navigation/NavigationBar';
import SplitLayout from '../components/SplitLayout/SplitLayout';
import LeftSide from '../components/SplitLayout/LeftSide/LeftSide';
import RightSide from '../components/SplitLayout/RightSide/RightSide';
import MenuTitle from '../components/MenuTitle/MenuTitle';
import TitleItem from '../components/TitleItem/TitleItem';
import Block from '../components/Blocks/Block';

let pageTitle = aboutUsMenuItem;
const pageSlug = transformMenuItemToSlug(pageTitle);
const apiSlug = transformMenuItemToApiSlug(pageTitle);

export const getStaticProps = async () => {
  const postData = await getDataOfPosts(apiSlug);

  return {
    props: {
      postData,
    },
  };
};

const UeberUnsPage = ({ postData }) => {
  const [sideSize, setSideSize] = useState('');

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
          <MenuTitle
            title={pageTitle}
            compressorValue={0.429}
            imageUrl={
              postData.coverimage !== null ? postData.coverimage.url : null
            }
            isInverted={postData.isInverted}
            isFullscreen
            passSizeToParentOnDrag={updateSideSize}
            addLineHeight
          />
        </LeftSide>
        <RightSide passSizeToChildOnDrag={updateSideSize}>
          {postData.blocks.map((postDataBlock) => (
            <Block
              key={nanoid()}
              blockType={postDataBlock.__component}
              content={postDataBlock}
            />
          ))}
        </RightSide>
      </SplitLayout>
    </div>
  );
};

export default UeberUnsPage;
