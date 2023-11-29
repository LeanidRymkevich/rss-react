import { FC } from 'react';
import Link from 'next/link';

import styles from '@src/components/NewsItem/NewsItems.module.scss';

import { NewsItemProps } from '@src/components/NewsItem/types';
import useRouterPath from '@src/hooks/useRouterPath';
import { getPath } from '@src/utils/PathUtils';

import { ITEM_TEST_ID } from '@src/__tests__/__mocks__/TEST_IDs';

const LINK_TEXT = 'Learn more';
const DESCRIPTION_SUBTITLE = 'Description: ';
const PUBLISHER_SUBTITLE = 'Publisher: ';
const AUTHOR_SUBTITLE = 'Author: ';

const NewsItem: FC<NewsItemProps> = ({
  itemNum,
  description,
  publisher,
  author,
}: NewsItemProps): JSX.Element => {
  const { page, limit, query } = useRouterPath();

  return (
    <li data-testid={ITEM_TEST_ID} className={styles.newsItem}>
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
        <Link href={getPath({ page, limit, query, id: itemNum })}>
          {LINK_TEXT}
        </Link>
      </div>
    </li>
  );
};

export { NewsItem, AUTHOR_SUBTITLE, PUBLISHER_SUBTITLE };
