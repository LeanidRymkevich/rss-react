import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from 'src/components/NewsItem/NewsItems.module.scss';

import { ITEM_TEST_ID } from 'src/__mocks__/NewsList';
import {
  ITEM_NUM_TEST_ID,
  DESCRIPTION_TEST_ID,
  PUBLISHER_TEST_ID,
  AUTHOR_TEST_ID,
  LINK_TEST_ID,
} from 'src/__mocks__/NewsItem';

import { NewsItemProps } from 'src/components/NewsItem/types';
import { Pages } from 'src/components/Router/Router';

const LINK_TEXT = 'Learn more';
const DESCRIPTION_SUBTITLE = 'Description: ';
const PUBLISHER_SUBTITLE = 'Publisher: ';
const AUTHOR_SUBTITLE = 'Author: ';

const NewsItem = ({
  itemNum,
  description,
  publisher,
  author,
}: NewsItemProps): ReactNode => {
  return (
    <li data-testid={ITEM_TEST_ID} className={styles.newsItem}>
      <div data-testid={ITEM_NUM_TEST_ID} className={styles.newsItem__number}>
        {itemNum}
      </div>
      <div className={styles.newsItem__content}>
        <p>
          <span className={styles.newsItem__subtitle}>
            {DESCRIPTION_SUBTITLE}
          </span>
          <span data-testid={DESCRIPTION_TEST_ID}>{description}</span>
        </p>
        <p>
          <span className={styles.newsItem__subtitle}>
            {PUBLISHER_SUBTITLE}
          </span>
          <span data-testid={PUBLISHER_TEST_ID}>{publisher}</span>
        </p>
        <p>
          <span className={styles.newsItem__subtitle}>{AUTHOR_SUBTITLE}</span>
          <span data-testid={AUTHOR_TEST_ID}>{author}</span>
        </p>
        <Link data-testid={LINK_TEST_ID} to={`${Pages.DETAILS}/${itemNum}`}>
          {LINK_TEXT}
        </Link>
      </div>
    </li>
  );
};

export { NewsItem, AUTHOR_SUBTITLE, PUBLISHER_SUBTITLE };
