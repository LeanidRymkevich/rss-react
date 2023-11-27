import { QUERY_PARAMS } from '@src/pages/types';
import { QUERY_PARTS } from '@src/utils/PathUtils';

const notFittingParts: QUERY_PARTS = {
  [QUERY_PARAMS.PAGE]: undefined,
  [QUERY_PARAMS.ID]: [],
  [QUERY_PARAMS.LIMIT]: [],
  [QUERY_PARAMS.QUERY]: undefined,
};

const parts: QUERY_PARTS = {
  [QUERY_PARAMS.PAGE]: 'page',
  [QUERY_PARAMS.ID]: '1',
  [QUERY_PARAMS.LIMIT]: '10',
  [QUERY_PARAMS.QUERY]: 'query',
};

export { notFittingParts, parts };
