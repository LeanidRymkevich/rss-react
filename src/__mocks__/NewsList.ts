import { INewsContext } from 'src/pages/News/types';
import { Article } from 'src/utils/APIWorking/types';

export const articles: Article[] = [
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Phil Rosen',
    title:
      'US stocks climb as trader nerves settle amid the continuing Israel-Hamas conflict',
    description:
      'This week, 11% of the S&P 500 is scheduled to publish earnings reports, including key names like Tesla, Bank of America, and Netflix.',
    url: 'https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-earnings-israel-hamas-investors-dow-2023-10',
    urlToImage:
      'https://i.insider.com/652d363c6561dd877e7b3321?width=1200&format=jpeg',
    publishedAt: '2023-10-16T13:35:19Z',
    content:
      'Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks climbed Monday, with investors monitoring the ongoing conflict between Israel and Hamas.</li>\n<li>Investors are also focused on key earnings rolling out… [+2245 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Filip De Mott',
    title:
      'US stocks fall as escalating Mideast tensions send oil prices higher',
    description:
      'A Gaza hospital explosion that killed around 500 people is concerning investors that Middle Eastern tensions are at risk of escalating.',
    url: 'https://markets.businessinsider.com/news/stocks/stock-market-news-today-hamas-israel-gaza-hospital-oil-prices-2023-10',
    urlToImage:
      'https://i.insider.com/652fd99696f7540cd05f2d3f?width=1200&format=jpeg',
    publishedAt: '2023-10-18T13:40:24Z',
    content:
      'A view of the surroundings of Al-Ahli Baptist Hospital after it was hit in Gaza City, Gaza on October 18, 2023.Ali Jadallah/Anadolu via Getty Images\r\n<ul>\n<li>US stocks dipped after a hospital explos… [+2208 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Matthew Fox',
    title:
      "US stocks rise as key Treasury yield nears 5% ahead of Powell's speech",
    description:
      'Of the 64 S&P 500 companies that have reported earnings results so far, 73% have beaten profit estimates by a median of 6%.',
    url: 'https://markets.businessinsider.com/news/stocks/stock-market-news-today-powell-speech-treasury-yield-5-fedspeak-2023-10',
    urlToImage:
      'https://i.insider.com/64c173eb42834d00193e631b?width=1200&format=jpeg',
    publishedAt: '2023-10-19T13:41:06Z',
    content:
      'Federal Reserve Board Chairman Jerome Powell speaks during a news conference.Alex Wong/Getty Images\r\n<ul><li>US stocks edged higher on Thursday as investors prepare for more comments from central ban… [+2366 chars]',
  },
  {
    source: {
      id: 'vice-news',
      name: 'Vice News',
    },
    author: 'Jordan Pearson, Jordan Pearson',
    title:
      'How One False Viral Tweet Cost Bitcoin Investors $84 Million in Minutes',
    description:
      'A viral tweet caused a huge price movement that burned investors. It was false.',
    url: 'https://www.vice.com/en/article/wxj7em/how-one-false-viral-tweet-cost-bitcoin-investors-dollar84-million-in-minutes',
    urlToImage:
      'https://video-images.vice.com/articles/652e87405f2cff3d7b7734d8/lede/1697548881056-gettyimages-700712909.jpeg?image-resize-opts=Y3JvcD0xeHc6MC44NDE2eGg7MHh3LDB4aCZyZXNpemU9MTIwMDoqJnJlc2l6ZT0xMjAwOio',
    publishedAt: '2023-10-17T13:27:10Z',
    content:
      'On Monday, a post on X from cryptocurrency news outlet Cointelegraph elated investors: regulators had approved major asset manager BlackRock’s Bitcoin exchange-traded fund (ETF), an investment produc… [+1991 chars]',
  },
  {
    source: {
      id: null,
      name: 'Windows Central',
    },
    author: 'colton.stradling@gmail.com (Colton Stradling)',
    title:
      'A Ledger app on the Microsoft store may be fake and stealing your cryptocurrency',
    description:
      'According to a new post, There was a fake ledger app on the Microsoft store that has stolen $588,000 so far in Bitcoin.',
    url: 'https://www.windowscentral.com/microsoft/a-ledger-app-on-the-microsoft-store-may-be-fake-and-stealing-your-cryptocurrency',
    urlToImage:
      'https://cdn.mos.cms.futurecdn.net/8rDrgkBoegUaXQabMewS2X-1200-80.jpg',
    publishedAt: '2023-11-05T10:00:16Z',
    content:
      'What you need to know\r\n<ul><li>A crypto investigator named @ZachXBT posted about the fake ledger app.</li><li>The app was named Ledger Live Web3.</li><li>The app was sending the Bitcoin to the scamme… [+2737 chars]',
  },
  {
    source: {
      id: null,
      name: 'MakeUseOf',
    },
    author: 'Elvis Gwaro',
    title: 'What Would Happen to Bitcoin and Crypto Without the Internet?',
    description:
      'Bitcoin, crypto, and the internet are inextricably linked. So what happens if the internet goes down for a prolonged period?',
    url: 'https://www.makeuseof.com/can-bitcoin-crypto-exist-without-the-internet/',
    urlToImage:
      'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/11/cryptocurrencies.jpg',
    publishedAt: '2023-11-09T11:45:16Z',
    content:
      'Key Takeaways\r\n<ul><li> Cryptocurrencies cannot exist without the internet as they rely on the internet for secure and direct transactions and to ensure the integrity of the blockchain database. </li… [+5825 chars]',
  },
  {
    source: {
      id: null,
      name: 'Science Daily',
    },
    author: null,
    title:
      "Bitcoin mining has 'very worrying' impacts on land and water, not only carbon",
    description:
      "As bitcoin and other cryptocurrencies have grown in market share, they've been criticized for their heavy carbon footprint: Cryptocurrency mining is an energy-intensive endeavor. Mining has massive water and land footprints as well, according to a new study t…",
    url: 'https://www.sciencedaily.com/releases/2023/10/231024234041.htm',
    urlToImage: 'https://www.sciencedaily.com/images/scidaily-icon.png',
    publishedAt: '2023-10-25T03:40:41Z',
    content:
      "As bitcoin and other cryptocurrencies have grown in market share, they've been criticized for their heavy carbon footprint: Cryptocurrency mining is an energy-intensive endeavor. Mining has massive w… [+5654 chars]",
  },
  {
    source: {
      id: null,
      name: 'Threadreaderapp.com',
    },
    author: null,
    title: 'CTF Writeup: Abusing select() to factor RSA',
    description:
      "@moyix: Will still try to do a blog post on my @CSAW_NYUTandon CTF challenge, NERV Center, but for now here's a thread explaining the key mechanics. I put a lot of work into the aesthetics, like this...…",
    url: 'https://threadreaderapp.com/thread/1723398619313603068.html',
    urlToImage:
      'https://threadreaderapp.com/images/screenshots/thread/1723398619313603068.jpg',
    publishedAt: '2023-11-11T19:59:39Z',
    content:
      'Support us! We are indie developers!\r\nThis site is made by just two indie developers on a laptop doing marketing, support and development! Read more about the story.\r\nBecome a Premium Member ($3/mont… [+395 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Matthew Fox',
    title:
      'US stocks fall amid tech earnings while weak Treasury auction sends bond yields higher',
    description:
      'Tech shares plunged Wednesday amid weak earnings and a fresh a rise in bond yields, with the 10-year US Treasury rebounding to 4.94%.',
    url: 'https://www.businessinsider.com/stock-market-news-today-tech-plunge-earnings-higher-interest-rates-2023-10',
    urlToImage:
      'https://i.insider.com/60bf9b2793c6fa00195e5bb0?width=1200&format=jpeg',
    publishedAt: '2023-10-25T20:05:32Z',
    content:
      'Traders work on the floor of the New York Stock Exchange (NYSE) in New York, U.S., March 9, 2020.Bryan R Smith/Reuters\r\n<ul><li>US stocks fell on Wednesday, dragged down by a sharp sell-off in mega-c… [+3096 chars]',
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author: 'Filip De Mott',
    title:
      'Dow soars 564 points as plummeting bond yields spark huge rally in US stocks',
    description:
      'The S&P 500 had its best day since June, as investors cheered a second day of big declines in Treasury yields.',
    url: 'https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-rally-bond-market-yields-fed-2023-11',
    urlToImage:
      'https://i.insider.com/649e89146e35e9001af90b97?width=1200&format=jpeg',
    publishedAt: '2023-11-02T20:15:44Z',
    content:
      'Traders work on the floor of the New York Stock Exchange (NYSE) on March 28, 2023 in New York City.Spencer Platt/Getty Images\r\n<ul>\n<li>The Dow jumped over 500 points while the S&P 500 neared its big… [+2576 chars]',
  },
];

export const contextMock: INewsContext = {
  query: '',
  articles: articles,
  page: '1',
  limit: '10',
  total: 10,
};

export const LIST_TEST_ID = 'list';
export const ITEM_TEST_ID = 'list-item';
export const NO_RESULTS_TEST_ID = 'no-results';
