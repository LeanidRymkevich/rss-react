import { NextRouter, useRouter } from 'next/router';

import {
  NORMALIZED_QUERY_PARTS,
  getNormalizedQueryParts,
} from '@src/utils/PathUtils';

export interface RouterPath {
  router: NextRouter;
  page: string;
  limit: string;
  query: string;
  id: string;
}

const useRouterPath = (): RouterPath => {
  const router: NextRouter = useRouter();
  const { page, limit, query, id } = router.query;
  const params: NORMALIZED_QUERY_PARTS = getNormalizedQueryParts({
    page,
    limit,
    query,
    id,
  });

  return {
    router,
    page: params.page,
    limit: params.limit,
    query: params.query,
    id: params.id,
  };
};

export default useRouterPath;
