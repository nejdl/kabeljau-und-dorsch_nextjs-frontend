import Link from 'next/link';
import styles from '../styles/pages/Page.module.css';
import filterStyles from '../components/Filters/Filter.module.css';
import { useState, useEffect } from 'react';
import { getDataOfPosts } from '../api/api';

// import ReactGA from 'react-ga';

import { authorsMenuItem } from '../components/Navigation/MenuItems';
import { transformMenuItemToSlug } from '../components/Navigation/MenuItems';
import { transformMenuItemToApiSlug } from '../components/Navigation/MenuItems';
import { groupPostsByLetter } from '../components/Filters/FilterLogic';

import HtmlHead from '../components/HtmlHead/HtmlHead';
import NavigationBar from '../components/Navigation/NavigationBar';
import SplitLayout from '../components/SplitLayout/SplitLayout';
import LeftSide from '../components/SplitLayout/LeftSide/LeftSide';
import RightSide from '../components/SplitLayout/RightSide/RightSide';
import Footer from '../components/SplitLayout/RightSide/Footer/Footer';
import MenuTitle from '../components/MenuTitle/MenuTitle';
import TitleItem from '../components/TitleItem/TitleItem';
import Block from '../components/Blocks/Block';
import FilterByLetter from '../components/Filters/FilterByLetter';

let pageTitle = authorsMenuItem;
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

const AutorinnenPage = ({ posts }) => {
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

  const postsGroupedByLetter = groupPostsByLetter(posts);
  // console.log(postsGroupedByLetter);
  // console.table(postsGroupedByLetter);
  // <pre>{JSON.stringify(postsGroupedByLetter[0].alphabet, null, 2)}</pre>

  // const [filterClickAlert, setFilterClickAlert] = useState('');

  // const deselectAllFilterOptions = () => {
  //     const filterOptions = document.getElementsByClassName(filterStyles.filterOptionLetter);

  //     for (let i = 0; i < filterOptions.length; i++){
  //         filterOptions[i].classList.remove(filterStyles.filterOptionSelected);
  //     }
  // }

  return (
    <div className={styles.siteBody}>
      <HtmlHead pageTitle={pageTitle} />

      <NavigationBar />
      <SplitLayout passSizeToParentOnDrag={updateSideSize}>
        <LeftSide>
          <MenuTitle title={pageTitle} compressorValue={0.556} />
        </LeftSide>
        <RightSide hideFooter>
          <div className={styles.filterWrapper}>
            <div className={filterStyles.filterBar}>
              <FilterByLetter
                // handleClickAlert={filterClickAlert}
                filterOptions={postsGroupedByLetter}
              />
            </div>
            <div
              className={styles.filterContent}
              // onScroll={deselectAllFilterOptions}
              // onClick={setFilterClickAlert}
            >
              {postsGroupedByLetter.map(({ alphabet, record }) => (
                <div key={alphabet} id={alphabet}>
                  <div className={filterStyles.filterOptionSeparator}>
                    {alphabet}
                  </div>
                  {record.map(
                    ({ id, surname, name, slug, coverimage, isInverted }) => (
                      <Link href={pageSlug + '/' + slug} key={id}>
                        <a className={styles.TitleItemLink}>
                          <TitleItem
                            title={`${surname} ${name}`}
                            imageUrl={
                              coverimage !== null ? coverimage.url : null
                            }
                            isInverted={isInverted}
                          />
                        </a>
                      </Link>
                    )
                  )}
                </div>
              ))}
              <Footer passSizeToFooterOnDrag={updateSideSize} />
            </div>
          </div>
        </RightSide>
      </SplitLayout>
    </div>
  );
};

export default AutorinnenPage;
