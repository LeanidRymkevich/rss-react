import { Component } from 'react';
import { LINK_TEXT, NewsItemProps } from 'src/components/NewsItem/types';

export default class NewsItem extends Component<NewsItemProps> {
  render(): JSX.Element {
    return (
      <li>
        <div>{this.props.itemNum}</div>
        <div>
          <p>
            <span>Description:</span>
            <span>{this.props.description}</span>
          </p>
          <p>
            <span>Publisher:</span>
            <span>{this.props.publisher}</span>
          </p>
          <p>
            <span>Author:</span>
            <span>{this.props.author}</span>
          </p>
          <a href="#">{LINK_TEXT}</a>
        </div>
      </li>
    );
  }
}
