// import { ReactNode, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// import styles from 'src/pages/News/news.module.scss';

// import { APIResponse } from 'src/utils/APIWorking/types';
// import { setNewsRecords } from 'src/utils/NewsPageUtils';

// import NewsList from 'src/components/NewsList/NewsList';
// import Loader from 'src/components/UI/Loader/Loader';
// import Pagination from 'src/components/UI/Pagination/Pagination';
// import { Pages } from 'src/components/Router/Router';
// import SearchBar from 'src/components/SearchBar/SearchBar';

// const SEARCH_RESULT_TITLE_TEXT = 'Search results';

// const News = (): ReactNode => {

// const [fetching, isLoading] = useFetching(async (): Promise<void> => {
//   const { query, limit } = context;
//   const pageNum = page || context.page;
//   const response: APIResponse = await getArticles(query, pageNum, limit);
//   context.articles = response.articles || [];
//   context.total = response.totalResults;
//   context.page = pageNum;
//   setNewsRecords(query, pageNum, limit);
// });

// useEffect(() => {
//   fetching();
// }, [context.query, page, context.limit]);

// return (
//   <div className={styles.news}>
//     <SearchBar />
//     <h2 className={styles.search_result_title}>{SEARCH_RESULT_TITLE_TEXT}</h2>
//     {isLoading ? <Loader /> : <NewsList />}
//     <Pagination {...{ ..., pathTemplate: Pages.MAIN }} />
//   </div>
// );
// };

// export default News;
