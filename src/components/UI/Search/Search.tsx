import { FC } from 'react';

import MyInput from '@src/components/UI/MyInput/MyInput';
import MyButton from '@src/components/UI/MyButton/MyButton';

import { SEARCH_BTN_TEXT, SearchProps } from '@src/components/UI/Search/types';

const Search: FC<SearchProps> = ({
  wrapperClass,
  inputProps,
  btnProps,
}: SearchProps): JSX.Element => {
  return (
    <div className={wrapperClass}>
      <MyInput {...inputProps} />
      <MyButton {...btnProps}>{SEARCH_BTN_TEXT}</MyButton>
    </div>
  );
};

export default Search;
