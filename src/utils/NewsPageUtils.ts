import { NewsItemProps } from 'src/components/NewsItem/types';
import { Article } from 'src/utils/APIWorking/types';
import { FREE_API_RESULTS_LIMIT } from 'src/utils/APIWorking/constants';
import { INewsContext } from 'src/pages/News/types';
const getNewsItemProps = ({
  articles,
  page,
  limit,
}: INewsContext): NewsItemProps[] => {
  console.log(articles);
  return articles.map((item: Article, idx: number): NewsItemProps => {
    return {
      itemNum: `${idx + 1 + (+page - 1) * +limit}`,
      description: item.description || 'none',
      publisher: item.source.name,
      author: item.author || 'none',
    };
  });
};

const calcPageAmount = (total: number, limit: number): number => {
  total = total > FREE_API_RESULTS_LIMIT ? FREE_API_RESULTS_LIMIT : total;
  return Math.ceil(total / limit);
};

const createDigitsArray = (itemsNumber: number): number[] => {
  const result: number[] = [];
  let counter = 1;

  while (itemsNumber >= counter) {
    result.push(counter);
    counter++;
  }
  return result;
};

export { getNewsItemProps, calcPageAmount, createDigitsArray };
