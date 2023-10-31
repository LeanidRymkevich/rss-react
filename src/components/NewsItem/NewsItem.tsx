import { Component } from 'react';
import { LINK_TEXT, NewsItemProps } from 'src/components/NewsItem/types';
import styles from 'src/components/NewsItem/NewsItems.module.scss';

export default class NewsItem extends Component<NewsItemProps> {
  render(): JSX.Element {
    return (
      <li className={styles.newsItem}>
        <div className={styles.newsItem__number}>{this.props.itemNum}</div>
        <div className={styles.newsItem__content}>
          <p>
            <span className={styles.newsItem__subtitle}>Description: </span>
            <span>{this.props.description}</span>
          </p>
          <p>
            <span className={styles.newsItem__subtitle}>Publisher: </span>
            <span>{this.props.publisher}</span>
          </p>
          <p>
            <span className={styles.newsItem__subtitle}>Author: </span>
            <span>{this.props.author}</span>
          </p>
          <a href="#">{LINK_TEXT}</a>
        </div>
      </li>
    );
  }
}
