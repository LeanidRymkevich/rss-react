/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

import styles from '@src/components/Details/styles.module.scss';
import searchBarStyles from '@src/components/SearchBar/SearchBar.module.scss';
import newsItemStyles from '@src/components/NewsItem/NewsItems.module.scss';

import { Article } from '@src/redux_store/api/types';

import MyButton from '@src/components/UI/MyButton/MyButton';
import Loader from '@src/components/UI/Loader/Loader';

import newsImgSRC from '@src/assets/news.jpg';
import {
  BTN_TEXT,
  BTN_TYPE,
  CONTENT_SUBTITLE,
  IMG_ALT_TEXT,
  LINK_TARGET,
  SEARCHED_IN_CONTENT_CHAR,
  LINK_TEXT,
  ERROR_TEXT,
} from '@src/components/Details/constants';
import {
  AUTHOR_SUBTITLE,
  PUBLISHER_SUBTITLE,
} from '@src/components/NewsItem/NewsItem';

import {
  getArticleFromResponse,
  useGetAllNewsQuery,
} from '@src/redux_store/api/newsApi';
import useRouterPath from '@src/hooks/useRouterPath';
import { getPath } from '@src/utils/PathUtils';

import { DETAILS_TEST_ID } from '@src/__tests__/__mocks__/TEST_IDs';

const Details: FC<object> = (): JSX.Element => {
  const { router, page, limit, query, id } = useRouterPath();

  const { data, isFetching, error } = useGetAllNewsQuery(
    {
      limit,
      page,
      query,
    },

    {
      skip: router.isFallback,
    }
  );

  if (error) throw error;

  const articleID: number = +id! - ((page ? +page : 1) - 1) * +limit;
  const article: Article | null = getArticleFromResponse(articleID, data);

  const onBtnClick = (): void => {
    router.push(getPath({ page, limit, query, id: undefined }));
  };

  const onSectionClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
  };

  return (
    <section
      data-testid={DETAILS_TEST_ID}
      className={styles.details}
      onClick={onSectionClick}
    >
      {isFetching || router.isFallback ? (
        <Loader />
      ) : article ? (
        <>
          <img
            className={styles.img}
            src={article.urlToImage || newsImgSRC.src}
            alt={IMG_ALT_TEXT}
          />
          <h3>{article.title}</h3>
          <p>
            <span className={newsItemStyles.newsItem__subtitle}>
              {PUBLISHER_SUBTITLE}
            </span>
            <span>{article.source.name}</span>
          </p>
          <p>
            <span className={newsItemStyles.newsItem__subtitle}>
              {AUTHOR_SUBTITLE}
            </span>
            <span>{article.author}</span>
          </p>
          <p>
            <span className={newsItemStyles.newsItem__subtitle}>
              {CONTENT_SUBTITLE}
            </span>
            <span>
              {article.content
                ? article.content.slice(
                    0,
                    article.content.indexOf(SEARCHED_IN_CONTENT_CHAR)
                  )
                : 'none'}
            </span>
          </p>
          <a href={article.url} target={LINK_TARGET}>
            {LINK_TEXT}
          </a>
          <MyButton
            className={`${searchBarStyles.btn} ${styles.details_btn}`}
            type={BTN_TYPE}
            onClick={onBtnClick}
          >
            {BTN_TEXT}
          </MyButton>
        </>
      ) : (
        <p>{ERROR_TEXT}</p>
      )}
    </section>
  );
};

export default Details;
