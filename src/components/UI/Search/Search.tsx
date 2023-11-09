import { ReactNode } from 'react';
import { SEARCH_BTN_TEXT, SearchProps } from 'src/components/UI/Search/types';
import Input from 'src/components/UI/Input/Input';
import Button from 'src/components/UI/Button/Button';

const Search = ({
  wrapperClass,
  inputProps,
  btnProps,
}: SearchProps): ReactNode => {
  return (
    <div className={wrapperClass}>
      <Input {...inputProps} />
      <Button {...btnProps}>{SEARCH_BTN_TEXT}</Button>
    </div>
  );
};

export default Search;
