import { NewsItemProps } from 'src/components/NewsItem/types';
import { MainState } from 'src/pages/Main/types';
import { getArticles } from 'src/utils/APIWorking/APIWorking';
import { APIResponse, Article } from 'src/utils/APIWorking/types';

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

export async function doSearch(
  state: MainState,
  setState: React.Dispatch<React.SetStateAction<MainState>>,
  query: string
): Promise<void> {
  const response: APIResponse = await getArticles(query || null);
  const [totalItems, resultItems] = [
    response.totalResults,
    response.articles || [],
  ];
  setState({
    ...state,
    query: query,
    results: resultItems,
    total: totalItems,
  });
}
