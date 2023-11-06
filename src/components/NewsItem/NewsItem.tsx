import { ReactNode } from 'react';
import { NewsItemProps } from 'src/components/NewsItem/types';
import styles from 'src/components/NewsItem/NewsItems.module.scss';
import { Link } from 'react-router-dom';
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
    <li className={styles.newsItem}>
      <div className={styles.newsItem__number}>{itemNum}</div>
      <div className={styles.newsItem__content}>
        <p>
          <span className={styles.newsItem__subtitle}>
            {DESCRIPTION_SUBTITLE}
          </span>
          <span>{description}</span>
        </p>
        <p>
          <span className={styles.newsItem__subtitle}>
            {PUBLISHER_SUBTITLE}
          </span>
          <span>{publisher}</span>
        </p>
        <p>
          <span className={styles.newsItem__subtitle}>{AUTHOR_SUBTITLE}</span>
          <span>{author}</span>
        </p>
        <Link to={`${Pages.DETAILS}/${itemNum}`}>{LINK_TEXT}</Link>
      </div>
    </li>
  );
};

export { NewsItem, AUTHOR_SUBTITLE, PUBLISHER_SUBTITLE };
