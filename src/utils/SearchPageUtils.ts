import { NewsItemProps } from 'src/components/NewsItem/types';
import { Article } from 'src/utils/APIWorking/types';

export function getNewsItemProps(articles: Article[]): NewsItemProps[] {
  return articles.map((item: Article, idx: number): NewsItemProps => {
    return {
      itemNum: `${idx + 1}`,
      description: item.description || 'none',
      publisher: item.source.name,
      author: item.author || 'none',
    };
  });
}
