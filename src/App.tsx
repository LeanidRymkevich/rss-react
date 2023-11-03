import { Component } from 'react';
import Main from 'src/pages/Main/Main';
import 'src/common_styles/common.scss';
import Details from 'src/pages/Details/Details';
import { Article } from './utils/APIWorking/types';

export default class App extends Component {
  public render(): JSX.Element {
    return (
      <div style={{ display: 'flex', width: '100%', gap: '1rem' }}>
        <Main />
        <Details {...test} />
      </div>
    );
  }
}

const test: Article = {
  source: {
    id: 'wired',
    name: 'Wired',
  },
  author: 'Gideon Lichfield, Lauren Goode',
  title: 'Where Does Crypto Go From Here?',
  description:
    'We talk with Michael Casey, the chief content officer of CoinDesk, almost one year after the news site brought down Sam Bankman-Fried’s cryptocurrency empire FTX.',
  url: 'https://www.wired.com/story/have-a-nice-future-podcast-24/',
  urlToImage: null,
  publishedAt: '2023-10-11T11:00:00Z',
  content:
    "Gideon Lichfield: You said just now that what Sam Bankman-Fried did was allegedly illegal. Is there a world in which it wasn't illegal?\r\nMichael Casey: I think we allI know. I'm trying to be a good j… [+2082 chars]",
};
