import styles from 'src/components/NewsList/NewsList.module.scss';
import { ReactNode } from 'react';
import { NewsItem } from 'src/components/NewsItem/NewsItem';
import { NewsItemProps } from '../NewsItem/types';
import { NewsListProps } from './types';

const NO_RESULT_FOUND_RESPONSE = 'There are no results for this request';

const NewsList = ({ items }: NewsListProps): ReactNode => {
  return items.length !== 0 ? (
    <ul className={styles.news_list}>
      {items.map((item: NewsItemProps): ReactNode => {
        return <NewsItem key={Date.now() + item.itemNum} {...item} />;
      })}
    </ul>
  ) : (
    <p className={styles.no_results}>{NO_RESULT_FOUND_RESPONSE}</p>
  );
};

export default NewsList;
