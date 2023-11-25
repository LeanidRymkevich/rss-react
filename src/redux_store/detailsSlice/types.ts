import { Article } from '@src/redux_store/api/types';

export interface DetailsState {
  isLoading: boolean;
  article: Article | null;
}

export const initialState: DetailsState = {
  isLoading: true,
  article: null,
};
