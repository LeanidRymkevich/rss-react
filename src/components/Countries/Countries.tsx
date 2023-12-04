import { FC } from 'react';

import styles from '@src/components/Countries/Countries.module.css';

import {
  FORM_FILEDs_NAMES,
  INPUT_TYPES,
} from '@src/pages/UncontrolledForm/types';
import { CountriesProps } from '@src/components/Countries/types';

import { useAppSelector } from '@src/hooks/reduxHooks';
import { selectCountries } from '@src/store/CountriesSlice/CountriesSlice';
import { JSX } from 'react/jsx-runtime';
import { CustomFormData } from '@src/Validation/Validation';
import { UseFormRegister } from 'react-hook-form';

const LIST_ID = 'list';

const Countries: FC<CountriesProps> = (props: CountriesProps): JSX.Element => {
  const register: UseFormRegister<CustomFormData> | undefined = props.register;
  const ref: React.RefObject<HTMLInputElement> | undefined = props.reference;
  let params;

  if (register) params = register(FORM_FILEDs_NAMES.COUNTRY);
  if (ref) params = { ref: props.reference };

  const countries: string[] = useAppSelector(selectCountries);

  return (
    <div className={[props.className, styles.countries_wrapper].join(' ')}>
      <input
        className={styles.input}
        type={INPUT_TYPES.TEXT}
        id={props.id}
        {...params}
        list={LIST_ID}
      />
      <datalist id={LIST_ID}>
        {countries.map((country: string, idx: number): JSX.Element => {
          return (
            <option className={styles.item} key={idx}>
              {country}
            </option>
          );
        })}
      </datalist>
    </div>
  );
};

export default Countries;
