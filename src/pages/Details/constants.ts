import { Article } from 'src/utils/APIWorking/types';

const IMG_ALT_TEXT = 'news_img';
const CONTENT_SUBTITLE = 'Content: ';
const LINK_TARGET = 'blank';
const BTN_TYPE = 'button';
const BTN_TEXT = 'Close details';
const SEARCHED_IN_CONTENT_CHAR = '[';
const LINK_TEXT = `Read more on the publisher's website >`;

const DEFAULT_ARTICLE: Article = {
  source: {
    id: '',
    name: '',
  },
  author: '',
  title: '',
  description: '',
  url: '',
  urlToImage: '',
  publishedAt: '',
  content: '',
};

export {
  IMG_ALT_TEXT,
  CONTENT_SUBTITLE,
  LINK_TARGET,
  BTN_TYPE,
  BTN_TEXT,
  SEARCHED_IN_CONTENT_CHAR,
  LINK_TEXT,
  DEFAULT_ARTICLE,
};
