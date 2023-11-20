import { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import styles from 'src/pages/Details/styles.module.scss';
import searchBarStyles from 'src/components/SearchBar/SearchBar.module.scss';
import newsItemStyles from 'src/components/NewsItem/NewsItems.module.scss';

import { Article } from 'src/utils/APIWorking/types';
import { getRidOfDetailsInPath } from 'src/utils/MainPageUtils';
import { state } from 'src/utils/StorageWorking/StorageWorking';

import Button from 'src/components/UI/Button/Button';
import Loader from 'src/components/UI/Loader/Loader';

import newsImgSRC from 'src/assets/news.jpg';
import {
  BTN_TEXT,
  BTN_TYPE,
  CONTENT_SUBTITLE,
  IMG_ALT_TEXT,
  LINK_TARGET,
  SEARCHED_IN_CONTENT_CHAR,
  LINK_TEXT,
  ERROR_TEXT,
} from 'src/pages/Details/constants';
import {
  AUTHOR_SUBTITLE,
  PUBLISHER_SUBTITLE,
} from 'src/components/NewsItem/NewsItem';
import {
  AUTHOR_TEST_ID,
  DETAILS_TEST_ID,
  PUBLISHER_TEST_ID,
} from 'src/__mocks__/NewsItem';
import { IMAGE_TEST_ID, LINK_TEST_ID } from 'src/__mocks__/Details';
import {
  getArticleFromResponse,
  useGetAllNewsQuery,
} from 'src/utils/APIWorking/newsAPI';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import {
  setDetails,
  setDetailsLoading,
} from 'src/redux_store/detailsSlice/detailsSlice';

const Details = (): ReactNode => {
  const { id, page } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const dispatch = useAppDispatch();
  const isLoading: boolean = useAppSelector((state) => state.details.isLoading);
  const pageNum: string = useAppSelector((state) => state.news.page);
  const limit: string = useAppSelector((state) => state.news.limit);
  const query: string = useAppSelector((state) => state.news.query);
  const { data, isFetching } = useGetAllNewsQuery({
    limit,
    page: page || pageNum,
    query,
  });

  const articleID: number = +id! - ((page ? +page : 1) - 1) * +state.limit;
  const article: Article | null = getArticleFromResponse(articleID, data);

  useEffect(() => {
    dispatch(setDetailsLoading(isFetching));
    dispatch(setDetails(article));
  }, [isFetching]);

  const onBtnClick = (): void => {
    const path: string = location.pathname;
    const newPath: string = getRidOfDetailsInPath(path);
    navigate(newPath);
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
      {isLoading ? (
        <Loader />
      ) : article ? (
        <>
          <img
            data-testid={IMAGE_TEST_ID}
            className={styles.img}
            src={article.urlToImage || newsImgSRC}
            alt={IMG_ALT_TEXT}
          />
          <h3>{article.title}</h3>
          <p>
            <span className={newsItemStyles.newsItem__subtitle}>
              {PUBLISHER_SUBTITLE}
            </span>
            <span data-testid={PUBLISHER_TEST_ID}>{article.source.name}</span>
          </p>
          <p>
            <span className={newsItemStyles.newsItem__subtitle}>
              {AUTHOR_SUBTITLE}
            </span>
            <span data-testid={AUTHOR_TEST_ID}>{article.author}</span>
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
          <a data-testid={LINK_TEST_ID} href={article.url} target={LINK_TARGET}>
            {LINK_TEXT}
          </a>
          <Button
            className={`${searchBarStyles.btn} ${styles.details_btn}`}
            type={BTN_TYPE}
            onClick={onBtnClick}
          >
            {BTN_TEXT}
          </Button>
        </>
      ) : (
        <p>{ERROR_TEXT}</p>
      )}
    </section>
  );
};

export default Details;
