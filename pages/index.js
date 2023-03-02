import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/pages/Page.module.css';
import { useState, useEffect } from 'react';

// import ReactGA from 'react-ga';

import { home } from '../components/Navigation/MenuItems';

import HtmlHead from '../components/HtmlHead/HtmlHead';
import NavigationBar from '../components/Navigation/NavigationBar';
import SplitLayout from '../components/SplitLayout/SplitLayout';
import LeftSide from '../components/SplitLayout/LeftSide/LeftSide';
import RightSide from '../components/SplitLayout/RightSide/RightSide';
import MenuTitle from '../components/MenuTitle/MenuTitle';
import TitleItem from '../components/TitleItem/TitleItem';

const HomePage = (props) => {
  let pageTitle = home;
  const pageSlug = '/';
  // const apiSlug = transformMenuItemToApiSlug();

  const [sideSize, setSideSize] = useState('hi');

  const updateSideSize = (leftSideSize) => {
    setSideSize(leftSideSize);
  };

  useEffect(() => {
    // // Google Analytics
    // ReactGA.initialize('');
    // ReactGA.pageview(pageSlug);

    // console.log('[index.js] component did mount / useEffect')
    setSideSize(0);
  }, []);

  return (
    <div className={styles.siteBody}>
      <HtmlHead pageTitle={pageTitle} />

      <NavigationBar />
      <div className={styles.splitLayoutIcon}></div>
      <SplitLayout passSizeToParentOnDrag={updateSideSize} randomSplitSize>
        <LeftSide>
          <Link href="/aktuelles">
            <a className={styles.link}>
              <MenuTitle
                title="Kabeljau"
                compressorValue={0.404}
                isFullscreen
              />
            </a>
          </Link>
        </LeftSide>
        <RightSide hideFooter>
          <Link href="/aktuelles">
            <a className={styles.link}>
              <MenuTitle
                title="&amp;Dorsch"
                compressorValue={0.41}
                isFullscreen
              />
            </a>
          </Link>
        </RightSide>
      </SplitLayout>
    </div>
  );
};

export default HomePage;
