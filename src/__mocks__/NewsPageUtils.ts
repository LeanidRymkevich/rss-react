import { NewsItemProps } from 'src/components/NewsItem/types';
import { INewsContext } from 'src/pages/News/types';

export const mockInput_1: INewsContext = {
  query: '',
  total: 2,
  page: '1',
  limit: '10',
  articles: [
    {
      source: {
        id: 'wired',
        name: 'Wired',
      },
      author: 'Gideon Lichfield, Lauren Goode',
      title: 'Where Does Crypto Go From Here?',
      description:
        'We talk with Michael Casey, the chief content officer of CoinDesk, almost one year after the news site brought down Sam Bankman-Fried’s cryptocurrency empire FTX.',
      url: 'https://www.wired.com/story/have-a-nice-future-podcast-24/',
      urlToImage:
        'https://media.wired.com/photos/6525c8ac419624284be05210/191:100/w_1280,c_limit/HANF-Michael%20Casey.jpg',
      publishedAt: '2023-10-11T11:00:00Z',
      content:
        "Gideon Lichfield: You said just now that what Sam Bankman-Fried did was allegedly illegal. Is there a world in which it wasn't illegal?\r\nMichael Casey: I think we allI know. I'm trying to be a good j… [+2082 chars]",
    },
    {
      source: {
        id: null,
        name: 'Gizmodo.com',
      },
      author: 'Maxwell Zeff',
      title: 'Crypto Exchanges, Not Just FTX, Are All a Mess Right Now',
      description:
        'The founders of cryptocurrency exchanges face a mountain of regulatory challenges and billions in personal losses. Binance CEO Changpeng Zhao personally lost $12 billion this year as trading volumes on Binance declined, according to a Bloomberg report Friday.…',
      url: 'https://gizmodo.com/crypto-exchanges-ftx-binance-genesis-gemini-are-a-mess-1850968083',
      urlToImage:
        'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/46326bbf3c33c4ddb3f18069c82167d7.jpg',
      publishedAt: '2023-10-27T20:10:00Z',
      content:
        'The founders of cryptocurrency exchanges face a mountain of regulatory challenges and billions in personal losses. Binance CEO Changpeng Zhao personally lost $12 billion this year as trading volumes … [+1852 chars]',
    },
  ],
};

export const mockOutput_1: NewsItemProps[] = [
  {
    itemNum: '1',
    description: mockInput_1.articles[0].description!,
    publisher: mockInput_1.articles[0].source.name,
    author: mockInput_1.articles[0].author!,
  },
  {
    itemNum: '2',
    description: mockInput_1.articles[1].description!,
    publisher: mockInput_1.articles[1].source.name,
    author: mockInput_1.articles[1].author!,
  },
];

export const mockInput_2: INewsContext = {
  query: '',
  total: 2,
  page: '1',
  limit: '10',
  articles: [
    {
      source: {
        id: 'wired',
        name: 'Wired',
      },
      author: null,
      title: 'Where Does Crypto Go From Here?',
      description: null,
      url: 'https://www.wired.com/story/have-a-nice-future-podcast-24/',
      urlToImage:
        'https://media.wired.com/photos/6525c8ac419624284be05210/191:100/w_1280,c_limit/HANF-Michael%20Casey.jpg',
      publishedAt: '2023-10-11T11:00:00Z',
      content:
        "Gideon Lichfield: You said just now that what Sam Bankman-Fried did was allegedly illegal. Is there a world in which it wasn't illegal?\r\nMichael Casey: I think we allI know. I'm trying to be a good j… [+2082 chars]",
    },
    {
      source: {
        id: null,
        name: 'Gizmodo.com',
      },
      author: null,
      title: 'Crypto Exchanges, Not Just FTX, Are All a Mess Right Now',
      description: null,
      url: 'https://gizmodo.com/crypto-exchanges-ftx-binance-genesis-gemini-are-a-mess-1850968083',
      urlToImage:
        'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/46326bbf3c33c4ddb3f18069c82167d7.jpg',
      publishedAt: '2023-10-27T20:10:00Z',
      content:
        'The founders of cryptocurrency exchanges face a mountain of regulatory challenges and billions in personal losses. Binance CEO Changpeng Zhao personally lost $12 billion this year as trading volumes … [+1852 chars]',
    },
  ],
};

export const mockOutput_2: NewsItemProps[] = [
  {
    itemNum: '1',
    description: 'none',
    publisher: mockInput_2.articles[0].source.name,
    author: 'none',
  },
  {
    itemNum: '2',
    description: 'none',
    publisher: mockInput_2.articles[1].source.name,
    author: 'none',
  },
];
