import { ReactNode } from 'react';

import styles from './styles.module.scss';
import mainPageStyles from 'src/pages/main/main.module.scss';
import newsItemStyles from 'src/components/NewsItem/NewsItems.module.scss';

import { Article } from 'src/utils/APIWorking/types';
import { ButtonProps } from 'src/components/UI/Button/types';

import Button from 'src/components/UI/Button/Button';

import newsImgSRC from 'src/assets/news.jpg';
import {
  BTN_TEXT,
  BTN_TYPE,
  CONTENT_SUBTITLE,
  IMG_ALT_TEXT,
  LINK_TARGET,
  SEARCHED_IN_CONTENT_CHAR,
} from 'src/pages/Details/constants';
import {
  AUTHOR_SUBTITLE,
  PUBLISHER_SUBTITLE,
} from 'src/components/NewsItem/constants';

const btnProps: ButtonProps = {
  className: `${mainPageStyles.btn} ${styles.details_btn}`,
  type: BTN_TYPE,
  text: BTN_TEXT,
  onClick: () => console.log('Close details'),
};

const Details = (props: Article): ReactNode => {
  return (
    <section className={styles.details}>
      <img
        className={styles.img}
        src={props.urlToImage || newsImgSRC}
        alt={IMG_ALT_TEXT}
      />
      <h3>{props.title}</h3>
      <p>
        <span className={newsItemStyles.newsItem__subtitle}>
          {PUBLISHER_SUBTITLE}
        </span>
        <span>{props.source.name}</span>
      </p>
      <p>
        <span className={newsItemStyles.newsItem__subtitle}>
          {AUTHOR_SUBTITLE}
        </span>
        <span>{props.author}</span>
      </p>
      <p>
        <span className={newsItemStyles.newsItem__subtitle}>
          {CONTENT_SUBTITLE}
        </span>
        <span>
          {props.content.slice(
            0,
            props.content.indexOf(SEARCHED_IN_CONTENT_CHAR)
          )}
        </span>
      </p>
      <a href={props.url} target={LINK_TARGET}>
        {props.url}
      </a>
      <Button {...btnProps} />
    </section>
  );
};

export default Details;
