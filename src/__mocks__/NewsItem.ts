import { NewsItemProps } from 'src/components/NewsItem/types';

const testData: NewsItemProps = {
  itemNum: '1',
  publisher: 'New York Times',
  description: 'Some description',
  author: 'Tom Johnson',
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
