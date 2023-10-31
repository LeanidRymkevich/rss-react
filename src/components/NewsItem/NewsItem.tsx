import { Component } from 'react';
import { NewsItemProps } from 'src/components/NewsItem/types';
import styles from 'src/components/NewsItem/NewsItems.module.scss';
import {
  LINK_TEXT,
  DESCRIPTION_SUBTITLE,
  PUBLISHER_SUBTITLE,
  AUTHOR_SUBTITLE,
} from 'src/components/NewsItem/constants';

export default class NewsItem extends Component<NewsItemProps> {
  render(): JSX.Element {
    return (
      <li className={styles.newsItem}>
        <div className={styles.newsItem__number}>{this.props.itemNum}</div>
        <div className={styles.newsItem__content}>
          <p>
            <span className={styles.newsItem__subtitle}>
              {DESCRIPTION_SUBTITLE}
            </span>
            <span>{this.props.description}</span>
          </p>
          <p>
            <span className={styles.newsItem__subtitle}>
              {PUBLISHER_SUBTITLE}
            </span>
            <span>{this.props.publisher}</span>
          </p>
          <p>
            <span className={styles.newsItem__subtitle}>{AUTHOR_SUBTITLE}</span>
            <span>{this.props.author}</span>
          </p>
          <a href="#">{LINK_TEXT}</a>
        </div>
      </li>
    );
  }
}
