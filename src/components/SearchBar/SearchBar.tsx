import { FC, useState } from 'react';

import styles from '@src/components/SearchBar/SearchBar.module.scss';

import {
  ERROR_BTN_TEXT,
  SEARCH_PLACEHOLDER,
  SELECT_PARAMS,
} from 'src/components/SearchBar/constants';

import Search from '@src/components/UI/Search/Search';
import MyButton from '@src/components/UI/MyButton/MyButton';
import Select from '@src/components/UI/Select/Select';

import { getPath } from '@src/utils/PathUtils';
import useRouterPath from '@src/hooks/useRouterPath';
import { DEFAULT_QUERY_PARAMS } from '@src/redux_store/api/constants';

const SearchBar: FC<object> = (): JSX.Element => {
  const { router, limit, query, id } = useRouterPath();

  const [hasError, setError] = useState(false);
  const [searchValue, setSearchValue] = useState(query);
  const [perPage, setPerPage] = useState(limit);

  const onSearchBtnClick = async (): Promise<void> => {
    router.push(
      getPath({
        page: DEFAULT_QUERY_PARAMS.page,
        limit,
        query: searchValue,
        id,
      })
    );
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
    router.push(
      getPath({ page: DEFAULT_QUERY_PARAMS.page, limit: limit, query, id })
    );
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
      <MyButton className={styles.btn} onClick={onErrorBtnClick}>
        {ERROR_BTN_TEXT}
      </MyButton>
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
