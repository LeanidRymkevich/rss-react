import { createContext } from 'react';
import { DEFAULT_NEWS_CONTEXT } from 'src/pages/News/constants';
import { INewsContext } from 'src/pages/News/types';

const NewsContext: React.Context<INewsContext> =
  createContext(DEFAULT_NEWS_CONTEXT);

export default NewsContext;
