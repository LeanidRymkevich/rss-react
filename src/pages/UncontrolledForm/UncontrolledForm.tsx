import { FC, useRef } from 'react';

import styles from '@src/pages/UncontrolledForm/UncontrolledForm.module.css';

import {
  FORM_FILEDs_NAMES,
  INPUT_TYPES,
} from '@src/pages/UncontrolledForm/types';
import { Pages } from '@src/Router/types';

import { capitalize } from '@src/utils/StringTransform';

import {
  BTN_TYPE,
  GENDER_FIELD_TEXT,
} from '@src/pages/UncontrolledForm/constants';
import Countries from '@src/components/Countries/Countries';

const UncontrolledForm: FC = (): JSX.Element => {
  const form = useRef<HTMLFormElement>(null);

  const btnOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    if (form.current) {
      for (const pair of new FormData(form.current).entries()) {
        console.log(pair[0], pair[1]);
      }
    }
  };

  return (
    <div>
      <h2 className={styles.title}>{`${Pages.UNCONTROLLED_FORM} Page`}</h2>
      <form className={styles.form} ref={form}>
        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.NAME}>
            {capitalize(FORM_FILEDs_NAMES.NAME)}
          </label>
          <input
            type={INPUT_TYPES.TEXT}
            id={FORM_FILEDs_NAMES.NAME}
            name={FORM_FILEDs_NAMES.NAME}
          />
          <p className={styles.error}></p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.AGE}>
            {capitalize(FORM_FILEDs_NAMES.AGE)}
          </label>
          <input
            type={INPUT_TYPES.NUMBER}
            id={FORM_FILEDs_NAMES.AGE}
            name={FORM_FILEDs_NAMES.AGE}
          />
          <p className={styles.error}></p>
        </div>

        <div className={styles.gender_wrapper}>
          <p className={styles.gender_text}>{GENDER_FIELD_TEXT}</p>
          <div className={styles.gender}>
            <label htmlFor={FORM_FILEDs_NAMES.GENDER_MALE}>
              {capitalize(FORM_FILEDs_NAMES.GENDER_MALE)}
            </label>
            <input
              type={INPUT_TYPES.RADIO}
              id={FORM_FILEDs_NAMES.GENDER_MALE}
              name={FORM_FILEDs_NAMES.GENDER_MALE}
              value={FORM_FILEDs_NAMES.GENDER_MALE}
            />
          </div>
          <div className={styles.gender}>
            <label htmlFor={FORM_FILEDs_NAMES.GENDER_FEMALE}>
              {capitalize(FORM_FILEDs_NAMES.GENDER_FEMALE)}
            </label>
            <input
              type={INPUT_TYPES.RADIO}
              id={FORM_FILEDs_NAMES.GENDER_FEMALE}
              name={FORM_FILEDs_NAMES.GENDER_FEMALE}
              value={FORM_FILEDs_NAMES.GENDER_FEMALE}
            />
          </div>
          <p className={styles.error}></p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.EMAIL}>
            {capitalize(FORM_FILEDs_NAMES.EMAIL)}
          </label>
          <input
            type={INPUT_TYPES.EMAIL}
            id={FORM_FILEDs_NAMES.EMAIL}
            name={FORM_FILEDs_NAMES.EMAIL}
          />
          <p className={styles.error}></p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.COUNTRY}>
            {capitalize(FORM_FILEDs_NAMES.COUNTRY)}
          </label>
          <Countries
            className={styles.countries_wrapper}
            id={FORM_FILEDs_NAMES.COUNTRY}
            name={FORM_FILEDs_NAMES.COUNTRY}
          />
          <p className={styles.error}></p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.IMAGE}>
            {capitalize(FORM_FILEDs_NAMES.IMAGE)}
          </label>
          <input
            type={INPUT_TYPES.FILE}
            id={FORM_FILEDs_NAMES.IMAGE}
            name={FORM_FILEDs_NAMES.IMAGE}
          />
          <p className={styles.error}></p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.PASSWORD}>
            {capitalize(FORM_FILEDs_NAMES.PASSWORD)}
          </label>
          <input
            type={INPUT_TYPES.PASSWORD}
            id={FORM_FILEDs_NAMES.PASSWORD}
            name={FORM_FILEDs_NAMES.PASSWORD}
          />
          <p className={styles.error}></p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.REPEAT_PASSWORD}>
            {capitalize(FORM_FILEDs_NAMES.REPEAT_PASSWORD)}
          </label>
          <input
            type={INPUT_TYPES.PASSWORD}
            id={FORM_FILEDs_NAMES.REPEAT_PASSWORD}
            name={FORM_FILEDs_NAMES.REPEAT_PASSWORD}
          />
          <p className={styles.error}></p>
        </div>

        <div className={styles.accept}>
          <label htmlFor={FORM_FILEDs_NAMES.ACCEPT_TnC}>
            {capitalize(FORM_FILEDs_NAMES.ACCEPT_TnC)}
          </label>
          <input
            type={INPUT_TYPES.CHECKBOX}
            id={FORM_FILEDs_NAMES.ACCEPT_TnC}
            name={FORM_FILEDs_NAMES.ACCEPT_TnC}
          />
          <p className={styles.error}></p>
        </div>

        <button type={BTN_TYPE} onClick={btnOnClick}>
          {capitalize(BTN_TYPE)}
        </button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
