import { FC } from 'react';
import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';

import styles from '@src/pages/Details/styles.module.scss';
import searchBarStyles from '@src/components/SearchBar/SearchBar.module.scss';
import newsItemStyles from '@src/components/NewsItem/NewsItems.module.scss';

import { Article } from '@src/redux_store/api/types';
import { INDEXES, Pages } from '@src/pages/types';

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
import { useAppSelector } from '@src/hooks/ReduxHooks';

const Details: FC<object> = (): JSX.Element => {
  const router: NextRouter = useRouter();

  const pageNum: string = useAppSelector((state) => state.news.page);
  const limit: string = useAppSelector((state) => state.news.limit);
  const query: string = useAppSelector((state) => state.news.query);

  const page: string = router.query[INDEXES.MAIN] as string;
  const id: string = router.query[INDEXES.DETAILS] as string;
  const { data, isFetching, error } = useGetAllNewsQuery({
    limit,
    page: page || pageNum,
    query,
  });

  if (error) throw error;

  const articleID: number = +id! - ((page ? +page : 1) - 1) * +limit;
  const article: Article | null = getArticleFromResponse(articleID, data);

  const onBtnClick = (): void => {
    router.push(`/${Pages.MAIN}/${page}`);
  };

  const onSectionClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
  };

  return (
    <section className={styles.details} onClick={onSectionClick}>
      {isFetching ? (
        <Loader />
      ) : article ? (
        <>
          <Image
            className={styles.img}
            src={article.urlToImage || newsImgSRC}
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
              {article.content.slice(
                0,
                article.content.indexOf(SEARCHED_IN_CONTENT_CHAR)
              )}
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
