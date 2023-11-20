import { ReactNode } from 'react';

import styles from 'src/components/NewsList/NewsList.module.scss';

import { NewsItem } from 'src/components/NewsItem/NewsItem';
import { NewsItemProps } from 'src/components/NewsItem/types';
import { LIST_TEST_ID } from 'src/__mocks__/NewsList';
import { NewsListProps } from './types';

export const NO_RESULT_FOUND_RESPONSE = 'There are no results for this request';

export const NewsList = ({ items }: NewsListProps): ReactNode => {
  return (
    <ul data-testid={LIST_TEST_ID} className={styles.news_list}>
      {items.map((item: NewsItemProps): ReactNode => {
        return <NewsItem key={Date.now() + item.itemNum} {...item} />;
      })}
    </ul>
  );
};
