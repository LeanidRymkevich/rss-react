import { ReactNode } from 'react';

import Input from 'src/components/UI/Input/Input';
import Button from 'src/components/UI/Button/Button';

import { SEARCH_BTN_TEXT, SearchProps } from 'src/components/UI/Search/types';

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
