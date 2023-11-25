import { FC } from 'react';

import styles from '@src/pages/main/main.module.scss';

import { SelectParams, OptionParams } from '@src/components/UI/Select/types';

const Select: FC<SelectParams> = ({
  defaultOption,
  options,
  value,
  onChange,
}: SelectParams): JSX.Element => {
  return (
    <select
      data-testid="test-select"
      className={styles.btn}
      value={value}
      onChange={onChange}
    >
      <option disabled value="">
        {defaultOption}
      </option>
      {options.map((option: OptionParams): JSX.Element => {
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
