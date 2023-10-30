import { Component, ReactNode } from 'react';
import { NewsListProps } from 'src/components/NewsList/types';
import { NewsItemProps } from 'src/components/NewsItem/types';
import NewsItem from 'src/components/NewsItem/NewsItem';

export default class NewsList extends Component<NewsListProps> {
  render(): JSX.Element {
    return (
      <ul>
        {this.props.items.map((item: NewsItemProps): ReactNode => {
          return (
            <NewsItem
              key={item.author + item.publisher + item.itemNum}
              {...item}
            />
          );
        })}
      </ul>
    );
  }
}
