import { FC, useRef, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ValidationError } from 'yup';

import styles from '@src/pages/UncontrolledForm/UncontrolledForm.module.css';

import {
  FORM_FILEDs_NAMES,
  INPUT_TYPES,
} from '@src/pages/UncontrolledForm/types';
import { Pages, Paths } from '@src/Router/types';

import schema, { CustomFormData } from '@src/Validation/Validation';
import { capitalize } from '@src/utils/StringTransform';
import PasswordStrength from '@src/components/PasswordStrength';
import {
  FormsErrorMessages,
  getFormDataItem,
  getFormErrorMessages,
  getFormInputsValues,
  initialErrors,
} from '@src/utils/UncontrolledFormUtils';

import {
  BTN_TYPE,
  GENDER_FIELD_TEXT,
} from '@src/pages/UncontrolledForm/constants';
import Countries from '@src/components/Countries/Countries';
import { useAppDispatch } from '@src/hooks/reduxHooks';
import { addItem } from '@src/store/FormDataSlice/FormDataSlice';

const UncontrolledForm: FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const dispatch = useAppDispatch();

  const [errors, setErrors] = useState<FormsErrorMessages>(initialErrors);
  const [pwStrength, setPwStrength] = useState<React.ReactNode>(undefined);

  const nameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  const maleInput = useRef<HTMLInputElement>(null);
  const femaleInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const countryInput = useRef<HTMLInputElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const repeatPasswordInput = useRef<HTMLInputElement>(null);
  const acceptInput = useRef<HTMLInputElement>(null);

  const btnOnClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    event.preventDefault();
    try {
      const data: CustomFormData = (await schema.validate(
        getFormInputsValues({
          nameInput,
          ageInput,
          maleInput,
          femaleInput,
          emailInput,
          countryInput,
          imageInput,
          passwordInput,
          repeatPasswordInput,
          acceptInput,
        }),
        { abortEarly: false }
      )) as CustomFormData;
      setPwStrength(undefined);
      setErrors(initialErrors);
      navigate(Paths[Pages.MAIN]);
      dispatch(addItem(await getFormDataItem(data, 'Uncontrolled Form')));
    } catch (error) {
      if (!(error instanceof ValidationError)) return;
      const errorsObj: FormsErrorMessages = getFormErrorMessages(error);
      setPwStrength(undefined);
      setErrors(errorsObj);
    }
  };

  const onChangePw = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const element: React.ReactNode = PasswordStrength(event.target.value);
    setPwStrength(element);
    setErrors({ ...errors, password: [] });
  };

  return (
    <div>
      <h2 className={styles.title}>{`${Pages.UNCONTROLLED_FORM} Page`}</h2>
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.NAME}>
            {capitalize(FORM_FILEDs_NAMES.NAME)}
          </label>
          <input
            type={INPUT_TYPES.TEXT}
            id={FORM_FILEDs_NAMES.NAME}
            name={FORM_FILEDs_NAMES.NAME}
            ref={nameInput}
          />
          <p className={styles.error}>{errors.name[0]}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.AGE}>
            {capitalize(FORM_FILEDs_NAMES.AGE)}
          </label>
          <input
            type={INPUT_TYPES.NUMBER}
            id={FORM_FILEDs_NAMES.AGE}
            name={FORM_FILEDs_NAMES.AGE}
            ref={ageInput}
          />
          <p className={styles.error}>{errors.age[0]}</p>
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
              name={FORM_FILEDs_NAMES.GENDER}
              value={FORM_FILEDs_NAMES.GENDER_MALE}
              ref={maleInput}
            />
          </div>
          <div className={styles.gender}>
            <label htmlFor={FORM_FILEDs_NAMES.GENDER_FEMALE}>
              {capitalize(FORM_FILEDs_NAMES.GENDER_FEMALE)}
            </label>
            <input
              type={INPUT_TYPES.RADIO}
              id={FORM_FILEDs_NAMES.GENDER_FEMALE}
              name={FORM_FILEDs_NAMES.GENDER}
              value={FORM_FILEDs_NAMES.GENDER_FEMALE}
              ref={femaleInput}
            />
          </div>
          <p className={styles.error}>{errors.gender[0]}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.EMAIL}>
            {capitalize(FORM_FILEDs_NAMES.EMAIL)}
          </label>
          <input
            type={INPUT_TYPES.EMAIL}
            id={FORM_FILEDs_NAMES.EMAIL}
            name={FORM_FILEDs_NAMES.EMAIL}
            ref={emailInput}
          />
          <p className={styles.error}>{errors.email[0]}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.COUNTRY}>
            {capitalize(FORM_FILEDs_NAMES.COUNTRY)}
          </label>
          <Countries
            className={styles.countries_wrapper}
            id={FORM_FILEDs_NAMES.COUNTRY}
            name={FORM_FILEDs_NAMES.COUNTRY}
            reference={countryInput}
          />
          <p className={styles.error}>{errors.country[0]}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.IMAGE}>
            {capitalize(FORM_FILEDs_NAMES.IMAGE)}
          </label>
          <input
            type={INPUT_TYPES.FILE}
            id={FORM_FILEDs_NAMES.IMAGE}
            name={FORM_FILEDs_NAMES.IMAGE}
            ref={imageInput}
          />
          <p className={styles.error}>{errors.image[0]}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.PASSWORD}>
            {capitalize(FORM_FILEDs_NAMES.PASSWORD)}
          </label>
          <input
            type={INPUT_TYPES.PASSWORD}
            id={FORM_FILEDs_NAMES.PASSWORD}
            name={FORM_FILEDs_NAMES.PASSWORD}
            ref={passwordInput}
            onChange={onChangePw}
          />
          {pwStrength}
          <p className={styles.error}>{errors.password[0]}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.REPEAT_PASSWORD}>
            {capitalize(FORM_FILEDs_NAMES.REPEAT_PASSWORD)}
          </label>
          <input
            type={INPUT_TYPES.PASSWORD}
            id={FORM_FILEDs_NAMES.REPEAT_PASSWORD}
            name={FORM_FILEDs_NAMES.REPEAT_PASSWORD}
            ref={repeatPasswordInput}
          />
          <p className={styles.error}>{errors.repeat_password[0]}</p>
        </div>

        <div className={styles.accept}>
          <label htmlFor={FORM_FILEDs_NAMES.ACCEPT_TnC}>
            {capitalize(FORM_FILEDs_NAMES.ACCEPT_TnC)}
          </label>
          <input
            type={INPUT_TYPES.CHECKBOX}
            id={FORM_FILEDs_NAMES.ACCEPT_TnC}
            name={FORM_FILEDs_NAMES.ACCEPT_TnC}
            ref={acceptInput}
          />
          <p className={styles.error}>{errors.acceptTnC[0]}</p>
        </div>

        <button type={BTN_TYPE} onClick={btnOnClick}>
          {capitalize(BTN_TYPE)}
        </button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
