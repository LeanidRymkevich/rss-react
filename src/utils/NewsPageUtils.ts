import { NewsItemProps } from 'src/components/NewsItem/types';
import { Article } from 'src/utils/APIWorking/types';

const getNewsItemProps = (articles: Article[]): NewsItemProps[] => {
  return articles.map((item: Article, idx: number): NewsItemProps => {
    return {
      itemNum: `${idx + 1}`,
      description: item.description || 'none',
      publisher: item.source.name,
      author: item.author || 'none',
    };
  });
};

const calcPageAmount = (total: string, limit: string): number =>
  Math.ceil(+total / +limit);

export { getNewsItemProps, calcPageAmount };
