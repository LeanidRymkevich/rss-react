import { PaginationProps } from 'src/components/UI/Pagination/types';

const props: PaginationProps = {
  total: 100,
  limit: '10',
  pathTemplate: 'main',
};

const PAGINATION_TEST_ID = 'pagination';
const BULLET_TEST_ID = 'bullet';

export { props, BULLET_TEST_ID, PAGINATION_TEST_ID };
