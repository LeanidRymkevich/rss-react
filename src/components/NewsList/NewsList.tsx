import { ReactNode, useContext } from 'react';

import styles from 'src/components/NewsList/NewsList.module.scss';

import { getNewsItemProps } from 'src/utils/NewsPageUtils';

import { NewsItem } from 'src/components/NewsItem/NewsItem';
import { NewsItemProps } from 'src/components/NewsItem/types';
import NewsContext from 'src/pages/News/NewsContext';
import { LIST_TEST_ID, NO_RESULTS_TEST_ID } from 'src/__mocks__/NewsList';
import { INewsContext } from 'src/pages/News/types';

export const NO_RESULT_FOUND_RESPONSE = 'There are no results for this request';

export const NewsList = (): ReactNode => {
  const context: INewsContext = useContext(NewsContext);
  const params: NewsItemProps[] = getNewsItemProps(context);

  return params.length !== 0 ? (
    <ul data-testid={LIST_TEST_ID} className={styles.news_list}>
      {params.map((item: NewsItemProps): ReactNode => {
        return <NewsItem key={Date.now() + item.itemNum} {...item} />;
      })}
    </ul>
  ) : (
    <p data-testid={NO_RESULTS_TEST_ID} className={styles.no_results}>
      {NO_RESULT_FOUND_RESPONSE}
    </p>
  );
};

export default NewsList;
