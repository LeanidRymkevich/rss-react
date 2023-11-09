import { BtnClickHandler } from 'src/components/UI/Button/types';

export interface SearchProps {
  wrapperClass?: string;
  inputProps: {
    className?: string;
    placeholder?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
  btnProps: {
    className?: string;
    onClick: BtnClickHandler;
  };
}

export const SEARCH_BTN_TEXT = 'Search';
