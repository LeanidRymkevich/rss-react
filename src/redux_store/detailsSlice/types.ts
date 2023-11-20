import { Article } from 'src/utils/APIWorking/types';

export interface DetailsState {
  isLoading: boolean;
  article: Article | null;
}

export const initialState: DetailsState = {
  isLoading: false,
  article: null,
};
