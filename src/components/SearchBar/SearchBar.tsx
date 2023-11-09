import { ReactNode, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from 'src/components/SearchBar/SearchBar.module.scss';

import Search from 'src/components/UI/Search/Search';
import Button from 'src/components/UI/Button/Button';
import Select from 'src/components/UI/Select/Select';
import NewsContext from 'src/pages/News/NewsContext';
import { Pages } from 'src/components/Router/Router';

import {
  ERROR_BTN_TEXT,
  SEARCH_PLACEHOLDER,
  SELECT_PARAMS,
} from 'src/components/SearchBar/constants';

const SearchBar = (): ReactNode => {
  const context = useContext(NewsContext);

  const navigate = useNavigate();

  const [hasError, setError] = useState(false);
  const [searchValue, setSearchValue] = useState(context.query);
  const [perPage, setPerPage] = useState(context.limit);

  const onSearchBtnClick = async (): Promise<void> => {
    context.query = searchValue;
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
    context.limit = limit;
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
      <Button className={styles.btn} onClick={onErrorBtnClick}>
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
