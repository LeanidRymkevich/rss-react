import { Article } from '@src/redux_store/api/types';

export interface DetailsState {
  article: Article | null;
}

export const initialState: DetailsState = {
  article: null,
};
