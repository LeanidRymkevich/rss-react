import { ReactNode, useEffect, useState } from 'react';

import styles from 'src/pages/Details/styles.module.scss';
import newsPageStyles from 'src/pages/News/news.module.scss';
import newsItemStyles from 'src/components/NewsItem/NewsItems.module.scss';

import { Article } from 'src/utils/APIWorking/types';

import Button from 'src/components/UI/Button/Button';

import newsImgSRC from 'src/assets/news.jpg';
import {
  BTN_TEXT,
  BTN_TYPE,
  CONTENT_SUBTITLE,
  IMG_ALT_TEXT,
  LINK_TARGET,
  SEARCHED_IN_CONTENT_CHAR,
  LINK_TEXT,
  DEFAULT_ARTICLE,
} from 'src/pages/Details/constants';
import {
  AUTHOR_SUBTITLE,
  PUBLISHER_SUBTITLE,
} from 'src/components/NewsItem/NewsItem';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getArticle } from 'src/utils/APIWorking/APIWorking';
import { useFetching } from 'src/hooks/useFetching';
import Loader from 'src/components/UI/Loader/Loader';
import { getRidOfDetailsInPath } from 'src/utils/MainPageUtils';

const Details = (): ReactNode => {
  const [article, setArticle] = useState(DEFAULT_ARTICLE);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  if (!id) throw new Error('Invalid details ID');

  const [fetching, isLoading] = useFetching(async (): Promise<void> => {
    const article: Article = await getArticle(+id);
    setArticle(article);
  });

  useEffect(() => {
    fetching();
  }, [id]);

  const onBtnClick = (): void => {
    const path: string = location.pathname;
    const newPath: string = getRidOfDetailsInPath(path);
    navigate(newPath);
  };

  const onSectionClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
  };

  return (
    <section className={styles.details} onClick={onSectionClick}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <img
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
          <Button
            className={`${newsPageStyles.btn} ${styles.details_btn}`}
            type={BTN_TYPE}
            onClick={onBtnClick}
          >
            {BTN_TEXT}
          </Button>
        </>
      )}
    </section>
  );
};

export default Details;
