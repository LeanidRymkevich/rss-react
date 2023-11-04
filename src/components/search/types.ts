import { BtnClickHandler } from 'src/components/UI/Button/types';

export interface SearchProps {
  wrapperClass?: string;
  inputClass?: string;
  btnClass?: string;
  value: string;
  placeholder?: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  onClickHandler: BtnClickHandler;
}

export const SEARCH_BTN_TEXT = 'Search';
