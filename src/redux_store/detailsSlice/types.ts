import { Article } from 'src/utils/APIWorking/types';
import { QueryStatus } from 'src/redux_store/newsSlice/types';

export interface DetailsState {
  status: QueryStatus;
  article: Article | null;
}

export const initialState: DetailsState = {
  status: 'idle',
  article: null,
};
