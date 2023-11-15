import { ReactNode } from 'react';

import Input from 'src/components/UI/Input/Input';
import Button from 'src/components/UI/Button/Button';

import { SEARCH_BTN_TEXT, SearchProps } from 'src/components/UI/Search/types';
import { INPUT_TEST_ID, SEARCH_BTN_TEST_ID } from 'src/__mocks__/SearchBar';

const Search = ({
  wrapperClass,
  inputProps,
  btnProps,
}: SearchProps): ReactNode => {
  return (
    <div className={wrapperClass}>
      <Input data-testid={INPUT_TEST_ID} {...inputProps} />
      <Button data-testid={SEARCH_BTN_TEST_ID} {...btnProps}>
        {SEARCH_BTN_TEXT}
      </Button>
    </div>
  );
};

export default Search;
