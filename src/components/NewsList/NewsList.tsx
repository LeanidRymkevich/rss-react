import { FC } from 'react';

import styles from '@src/components/NewsList/NewsList.module.scss';

import { NewsItemProps } from '@src/components/NewsItem/types';
import { NewsListProps } from '@src/components/NewsList/types';

import { NewsItem } from '@src/components/NewsItem/NewsItem';

export const NO_RESULT_FOUND_RESPONSE = 'There are no results for this request';

export const NewsList: FC<NewsListProps> = ({
  items,
}: NewsListProps): JSX.Element => {
  return (
    <ul className={styles.news_list}>
      {items.map((item: NewsItemProps): JSX.Element => {
        return <NewsItem key={item.itemNum} {...item} />;
      })}
    </ul>
  );
};
