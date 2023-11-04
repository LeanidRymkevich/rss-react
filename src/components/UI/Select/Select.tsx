import { ReactNode } from 'react';
import { SelectParams, OptionParams } from 'src/components/UI/Select/types';

const Select = ({
  defaultOption,
  options,
  value,
  onChange,
}: SelectParams): ReactNode => {
  return (
    <select value={value} onChange={onChange}>
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
