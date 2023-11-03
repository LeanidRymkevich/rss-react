import { NewsItemProps } from 'src/components/NewsItem/types';
import Main from 'src/pages/Main/Main';
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

export async function doSearch(page: Main, query: string): Promise<void> {
  page.setState({ isNewsLoading: true });
  const response: APIResponse = await getArticles(query || null);
  const [totalItems, resultItems] = [
    response.totalResults,
    response.articles || [],
  ];
  page.setState({
    query: query,
    results: resultItems,
    total: totalItems,
    isNewsLoading: false,
  });
}
