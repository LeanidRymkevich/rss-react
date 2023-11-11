import { ReactNode } from 'react';

import styles from 'src/pages/News/News.module.scss';

import { SelectParams, OptionParams } from 'src/components/UI/Select/types';
import { TEST_ID } from 'src/components/UI/Select/Select.test';

const Select = ({
  defaultOption,
  options,
  value,
  onChange,
}: SelectParams): ReactNode => {
  return (
    <select
      data-testid={TEST_ID}
      className={styles.btn}
      value={value}
      onChange={onChange}
    >
      <option disabled value="">
        {defaultOption}
      </option>
      {options.map((option: OptionParams): ReactNode => {
        return (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
