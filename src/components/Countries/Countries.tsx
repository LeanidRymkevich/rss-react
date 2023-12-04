import { FC, useState } from 'react';

import styles from '@src/components/Countries/Countries.module.css';

import {
  FORM_FILEDs_NAMES,
  INPUT_TYPES,
} from '@src/pages/UncontrolledForm/types';
import { CountriesProps } from '@src/components/Countries/types';

import { useAppSelector } from '@src/hooks/reduxHooks';
import { selectCountries } from '@src/store/CountriesSlice/CountriesSlice';
import Dropdown from '@src/components/Dropdown/Dropdown';

const Countries: FC<CountriesProps> = (props: CountriesProps): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [hidden, setHidden] = useState(true);
  const register = props.register;

  let params;
  if (register) {
    const registerObj = register(FORM_FILEDs_NAMES.COUNTRY);
    registerObj.onBlur;
    params = {
      ...registerObj,
      onBlur: (event: React.FocusEvent<HTMLInputElement, Element>): void => {
        const input: HTMLInputElement = event.target as HTMLInputElement;
        setInputValue(input.value);
        setTimeout((): void => setHidden(true), 200);
        registerObj.onBlur(event);
      },
      onChange: (event: React.ChangeEvent<HTMLInputElement>): void => {
        registerObj.onChange(event);
        const input: HTMLInputElement = event.target as HTMLInputElement;
        setInputValue(input.value);
      },
    };
  } else {
    params = {
      ref: props.reference,
      name: props.name,
      onBlur: (event: React.FocusEvent<HTMLInputElement, Element>): void => {
        const input: HTMLInputElement = event.target as HTMLInputElement;
        setInputValue(input.value);
        console.log(input.value);
        setTimeout((): void => setHidden(true), 200);
      },
      onChange: (event: React.ChangeEvent<HTMLInputElement>): void => {
        const input: HTMLInputElement = event.target as HTMLInputElement;
        setInputValue(input.value);
      },
    };
  }

  const countries: string[] = useAppSelector(selectCountries);
  const filteredCountries: string[] = countries.filter(
    (country: string): boolean =>
      country.toLowerCase().includes(inputValue.toLowerCase())
  );

  const onFocus = (): void => setHidden(false);

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
        id={props.id}
        onFocus={onFocus}
        {...params}
      />
      {!hidden && (
        <Dropdown items={filteredCountries} onClick={onDropdownClick} />
      )}
    </div>
  );
};

export default Countries;
