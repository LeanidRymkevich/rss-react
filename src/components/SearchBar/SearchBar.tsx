import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from 'src/components/SearchBar/SearchBar.module.scss';

import Search from 'src/components/UI/Search/Search';
import Button from 'src/components/UI/Button/Button';
import Select from 'src/components/UI/Select/Select';
import { Pages } from 'src/components/Router/Router';

import {
  ERROR_BTN_TEXT,
  SEARCH_PLACEHOLDER,
  SELECT_PARAMS,
} from 'src/components/SearchBar/constants';
import { ERROR_BTN_TEST_ID } from 'src/__mocks__/SearchBar';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import { setLimit, setQuery } from 'src/redux_store/newsSlice/newsSlice';

const SearchBar = (): ReactNode => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const limit: string = useAppSelector((state) => state.news.limit);
  const query: string = useAppSelector((state) => state.news.query);

  const [hasError, setError] = useState(false);
  const [searchValue, setSearchValue] = useState(query);
  const [perPage, setPerPage] = useState(limit);

  const onSearchBtnClick = async (): Promise<void> => {
    dispatch(setQuery(searchValue));
    navigate(`/${Pages.MAIN}/1`);
  };

  const onSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(event.target.value);
  };

  const onErrorBtnClick = (): void => {
    setError(true);
  };

  const onSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const limit: string = event.target.value;
    setPerPage(limit);
    dispatch(setLimit(limit));
    navigate(`/${Pages.MAIN}/1`);
  };

  if (hasError) throw new Error();

  return (
    <section className={styles.search_wrapper}>
      <Search
        wrapperClass={styles.search}
        inputProps={{
          className: styles.input,
          placeholder: SEARCH_PLACEHOLDER,
          value: searchValue,
          onChange: onSearchInputChange,
        }}
        btnProps={{
          className: styles.btn,
          onClick: onSearchBtnClick,
        }}
      />
      <Button
        data-testid={ERROR_BTN_TEST_ID}
        className={styles.btn}
        onClick={onErrorBtnClick}
      >
        {ERROR_BTN_TEXT}
      </Button>
      <Select
        {...{
          ...SELECT_PARAMS,
          value: perPage,
          onChange: onSelectChange,
        }}
      ></Select>
    </section>
  );
};

export default SearchBar;
