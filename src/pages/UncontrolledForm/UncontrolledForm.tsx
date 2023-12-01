import { FC, useRef } from 'react';

import {
  FORM_FILEDs_NAMES,
  INPUT_TYPES,
} from '@src/pages/UncontrolledForm/types';
import { BTN_TYPE } from './constants';
import { capitalize } from '@src/utils/StringTransform';
import { Pages } from '@src/Router/types';

const UncontrolledForm: FC = (): JSX.Element => {
  const form = useRef<HTMLFormElement>(null);

  const btnOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    console.log(form.current?.value);
  };

  return (
    <div>
      <h2>{`${Pages.UNCONTROLLED_FORM} Page`}</h2>
      <form ref={form}>
        <div>
          <label htmlFor={FORM_FILEDs_NAMES.NAME}>
            {capitalize(FORM_FILEDs_NAMES.NAME)}
          </label>
          <input
            type={INPUT_TYPES.TEXT}
            id={FORM_FILEDs_NAMES.NAME}
            name={FORM_FILEDs_NAMES.NAME}
          />
        </div>

        <div>
          <label htmlFor={FORM_FILEDs_NAMES.AGE}>
            {capitalize(FORM_FILEDs_NAMES.AGE)}
          </label>
          <input
            type={INPUT_TYPES.NUMBER}
            id={FORM_FILEDs_NAMES.AGE}
            name={FORM_FILEDs_NAMES.AGE}
          />
        </div>

        <div>
          <div>
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
          <div>
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
        </div>

        <div>
          <label htmlFor={FORM_FILEDs_NAMES.EMAIL}>
            {capitalize(FORM_FILEDs_NAMES.EMAIL)}
          </label>
          <input
            type={INPUT_TYPES.EMAIL}
            id={FORM_FILEDs_NAMES.EMAIL}
            name={FORM_FILEDs_NAMES.EMAIL}
          />
        </div>

        <div>
          <label htmlFor={FORM_FILEDs_NAMES.COUNTRY}>
            {capitalize(FORM_FILEDs_NAMES.COUNTRY)}
          </label>
          <input
            type={INPUT_TYPES.TEXT}
            id={FORM_FILEDs_NAMES.COUNTRY}
            name={FORM_FILEDs_NAMES.COUNTRY}
          ></input>
        </div>

        <div>
          <label htmlFor={FORM_FILEDs_NAMES.IMAGE}>
            {capitalize(FORM_FILEDs_NAMES.IMAGE)}
          </label>
          <input
            type={INPUT_TYPES.FILE}
            id={FORM_FILEDs_NAMES.IMAGE}
            name={FORM_FILEDs_NAMES.IMAGE}
          ></input>
        </div>

        <div>
          <label htmlFor={FORM_FILEDs_NAMES.PASSWORD}>
            {capitalize(FORM_FILEDs_NAMES.PASSWORD)}
          </label>
          <input
            type={INPUT_TYPES.PASSWORD}
            id={FORM_FILEDs_NAMES.PASSWORD}
            name={FORM_FILEDs_NAMES.PASSWORD}
          />
        </div>

        <div>
          <label htmlFor={FORM_FILEDs_NAMES.REPEAT_PASSWORD}>
            {capitalize(FORM_FILEDs_NAMES.REPEAT_PASSWORD)}
          </label>
          <input
            type={INPUT_TYPES.PASSWORD}
            id={FORM_FILEDs_NAMES.REPEAT_PASSWORD}
            name={FORM_FILEDs_NAMES.REPEAT_PASSWORD}
          />
        </div>

        <div>
          <label htmlFor={FORM_FILEDs_NAMES.ACCEPT_TnC}>
            {capitalize(FORM_FILEDs_NAMES.ACCEPT_TnC)}
          </label>
          <input
            type={INPUT_TYPES.CHECKBOX}
            id={FORM_FILEDs_NAMES.ACCEPT_TnC}
            name={FORM_FILEDs_NAMES.ACCEPT_TnC}
          />
        </div>

        <button type={BTN_TYPE} onClick={btnOnClick}>
          {capitalize(BTN_TYPE)}
        </button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
