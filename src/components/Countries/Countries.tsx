import { FC, useState } from 'react';

import styles from '@src/components/Countries/Countries.module.css';

import { INPUT_TYPES } from '@src/pages/UncontrolledForm/types';
import { CountriesProps } from '@src/components/Countries/types';

import { useAppSelector } from '@src/hooks/reduxHooks';
import { selectCountries } from '@src/store/CountriesSlice/CountriesSlice';
import Dropdown from '@src/components/Dropdown/Dropdown';

const Countries: FC<CountriesProps> = (props: CountriesProps): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [hidden, setHidden] = useState(true);

  const countries: string[] = useAppSelector(selectCountries);
  const filteredCountries: string[] = countries.filter(
    (country: string): boolean =>
      country.toLowerCase().includes(inputValue.toLowerCase())
  );

  const onFocus = (): void => setHidden(false);
  const onBlur = (): void => {
    setTimeout((): void => setHidden(true), 100);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    setInputValue(input.value);
  };

  const onDropdownClick = (
    event: React.MouseEvent<HTMLParagraphElement>
  ): void => {
    const target: HTMLParagraphElement = event.target as HTMLParagraphElement;
    const country: string = target.textContent || '';
    setInputValue(country);
    setHidden(true);
  };

  return (
    <div className={[props.className, styles.countries_wrapper].join(' ')}>
      <input
        value={inputValue}
        className={styles.input}
        type={INPUT_TYPES.TEXT}
        name={props.name}
        id={props.id}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {!hidden && (
        <Dropdown items={filteredCountries} onClick={onDropdownClick} />
      )}
    </div>
  );
};

export default Countries;
