import { contextMock } from 'src/__mocks__/NewsList';
import { NewsItemProps } from 'src/components/NewsItem/types';

const itemNum = 0;
const testData: NewsItemProps = {
  itemNum: `${itemNum + 1}`,
  publisher: contextMock.articles[itemNum].source.name,
  description: contextMock.articles[itemNum].description || 'none',
  author: contextMock.articles[itemNum].author || 'none',
};

const ITEM_NUM_TEST_ID = 'item-num';
const DESCRIPTION_TEST_ID = 'description';
const PUBLISHER_TEST_ID = 'publisher';
const AUTHOR_TEST_ID = 'author';
const DETAILS_TEST_ID = 'details';
const LINK_TEST_ID = 'details';

export {
  testData,
  ITEM_NUM_TEST_ID,
  DESCRIPTION_TEST_ID,
  PUBLISHER_TEST_ID,
  AUTHOR_TEST_ID,
  DETAILS_TEST_ID,
  LINK_TEST_ID,
};
