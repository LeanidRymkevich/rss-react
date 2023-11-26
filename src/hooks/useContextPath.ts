import {
  NORMALIZED_QUERY_PARTS,
  getNormalizedQueryParts,
} from '@src/utils/PathUtils';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';

export interface ContextPath {
  page: string;
  limit: string;
  query: string;
  id: string;
}

const useContextPath = (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
): ContextPath => {
  const { query, page, limit, id } = context.query;
  const params: NORMALIZED_QUERY_PARTS = getNormalizedQueryParts({
    page,
    limit,
    query,
    id,
  });

  return {
    page: params.page,
    limit: params.limit,
    query: params.query,
    id: params.id,
  };
};

export default useContextPath;
