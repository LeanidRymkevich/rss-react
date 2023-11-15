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
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  };
}

export const SEARCH_BTN_TEXT = 'Search';
