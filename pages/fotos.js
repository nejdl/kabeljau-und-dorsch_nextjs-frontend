import Link from 'next/link';
import styles from '../styles/pages/Page.module.css';
import filterStyles from '../components/Filters/Filter.module.css';
import { useState, useEffect } from 'react';
import { getDataOfPosts } from '../api/api';

// import ReactGA from 'react-ga';

import { photosMenuItem } from '../components/Navigation/MenuItems';
import { transformMenuItemToSlug } from '../components/Navigation/MenuItems';
import { transformMenuItemToApiSlug } from '../components/Navigation/MenuItems';
import { groupPostsByCategory } from '../components/Filters/FilterLogic';
import { sortBySortingDate } from '../components/Filters/SortBySortingDate';

import HtmlHead from '../components/HtmlHead/HtmlHead';
import NavigationBar from '../components/Navigation/NavigationBar';
import SplitLayout from '../components/SplitLayout/SplitLayout';
import LeftSide from '../components/SplitLayout/LeftSide/LeftSide';
import RightSide from '../components/SplitLayout/RightSide/RightSide';
import Footer from '../components/SplitLayout/RightSide/Footer/Footer';
import MenuTitle from '../components/MenuTitle/MenuTitle';
import TitleItem from '../components/TitleItem/TitleItem';
import Block from '../components/Blocks/Block';
import FilterByFormat from '../components/Filters/FilterByFormat';

let pageTitle = photosMenuItem;
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

const FotosPage = ({ posts }) => {
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

  // update filtered posts
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const formatDate = (date) => {
    let datePart = date.match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1],
      day = datePart[2];

    return day + '.' + month + '.' + year;
  };

  const formatStartEndDate = (start_date, end_date) => {
    let formattedDateString = '';

    if (start_date !== null && end_date === null) {
      formattedDateString += formatDate(start_date);
    } else if (start_date !== null && end_date !== null) {
      formattedDateString +=
        formatDate(start_date) + ' bis ' + formatDate(end_date);
    }
    return formattedDateString;
  };

  const formatRelatedFormats = (relatedFormats) => {
    let relatedFormatsString = '';
    relatedFormats.map(({ title }) => {
      relatedFormatsString += ' ' + title;
    });

    return relatedFormatsString;
  };

  let filterOptions = groupPostsByCategory(posts);

  const handlePostFiltering = (filterOptionFormat) => {
    // remove selected style from all filter options
    let filterOptionDivs = document.getElementsByClassName(
      filterStyles.filterOption
    );
    for (let i = 0; i < filterOptionDivs.length; i++) {
      filterOptionDivs[i].classList.remove(filterStyles.filterOptionSelected);
    }

    // show all
    // if no filter option selected
    if (filterOptionFormat === undefined) {
      setFilteredPosts(posts);
      let selectedFilterOptionDiv = document.getElementById('allFormats');
      selectedFilterOptionDiv.classList.add(filterStyles.filterOptionSelected);

      // show only posts with this format
    } else {
      filterOptions.map((filterOption) => {
        if (filterOption.format === filterOptionFormat) {
          setFilteredPosts(filterOption.record);
          let selectedFilterOptionDiv = document.getElementById(
            filterOption.format
          );
          selectedFilterOptionDiv.classList.add(
            filterStyles.filterOptionSelected
          );
        }
      });
    }
  };

  return (
    <div className={styles.siteBody}>
      <HtmlHead pageTitle={pageTitle} />

      <NavigationBar />
      <SplitLayout passSizeToParentOnDrag={updateSideSize}>
        <LeftSide>
          <MenuTitle title={pageTitle} compressorValue={0.268} />
        </LeftSide>
        <RightSide hideFooter>
          <div className={filterStyles.filterWrapper}>
            <div className={filterStyles.filterBar}>
              <FilterByFormat
                availableFilterOptions={filterOptions}
                filterPosts={handlePostFiltering}
                // filteredPosts={currentFilteredPosts}
              />
            </div>
            <div className={styles.filterContent}>
              {filteredPosts.map(
                ({
                  id,
                  title,
                  start_date,
                  end_date,
                  location,
                  related_formats,
                  slug,
                  coverimage,
                  isInverted,
                }) => (
                  <Link href={pageSlug + '/' + slug} key={id}>
                    <a className={styles.TitleItemLink}>
                      <TitleItem
                        title={title}
                        surtitle={[
                          `${formatStartEndDate(start_date, end_date)}`,
                          location,
                          `${formatRelatedFormats(related_formats)}`,
                        ]}
                        imageUrl={coverimage !== null ? coverimage.url : null}
                        isInverted={isInverted}
                      />
                    </a>
                  </Link>
                )
              )}
              <Footer passSizeToFooterOnDrag={updateSideSize} />
            </div>
          </div>
        </RightSide>
      </SplitLayout>
    </div>
  );
};

export default FotosPage;
