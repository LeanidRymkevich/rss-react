import { FC, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from '@src/pages/UncontrolledForm/UncontrolledForm.module.css';

import {
  FORM_FILEDs_NAMES,
  INPUT_TYPES,
} from '@src/pages/UncontrolledForm/types';
import { Pages, Paths } from '@src/Router/types';

import schema, { CustomFormData } from '@src/Validation/Validation';
import { capitalize } from '@src/utils/StringTransform';
import PasswordStrength from '@src/components/PasswordStrength/PasswordStrength';
import { getFormDataItem } from '@src/utils/UncontrolledFormUtils';
import { useAppDispatch } from '@src/hooks/reduxHooks';
import { addItem } from '@src/store/FormDataSlice/FormDataSlice';

import {
  BTN_TYPE,
  GENDER_FIELD_TEXT,
} from '@src/pages/UncontrolledForm/constants';
import Countries from '@src/components/Countries/Countries';

const ReactHookForm: FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CustomFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  console.log(errors.country?.ref?.value);
  const navigate: NavigateFunction = useNavigate();

  const dispatch = useAppDispatch();
  console.log(isValid);
  const [pwStrength, setPwStrength] = useState<React.ReactNode>(undefined);

  const onSubmit: SubmitHandler<CustomFormData> = async (
    data: CustomFormData
  ): Promise<void> => {
    dispatch(addItem(await getFormDataItem(data, Pages.REACT_HOOK_FORM)));
    navigate(Paths[Pages.MAIN]);
  };

  const onInputPw = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const element: React.ReactNode = PasswordStrength(event.target.value);
    setPwStrength(element);
  };

  return (
    <div>
      <h2 className={styles.title}>{`${Pages.REACT_HOOK_FORM} Page`}</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.NAME}>
            {capitalize(FORM_FILEDs_NAMES.NAME)}
          </label>
          <input
            type={INPUT_TYPES.TEXT}
            id={FORM_FILEDs_NAMES.NAME}
            {...register(FORM_FILEDs_NAMES.NAME)}
          />
          <p className={styles.error}>{errors.name?.message}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.AGE}>
            {capitalize(FORM_FILEDs_NAMES.AGE)}
          </label>
          <input
            type={INPUT_TYPES.NUMBER}
            id={FORM_FILEDs_NAMES.AGE}
            {...register(FORM_FILEDs_NAMES.AGE)}
          />
          <p className={styles.error}>{errors.age?.message}</p>
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
              {...register(FORM_FILEDs_NAMES.GENDER)}
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
              {...register(FORM_FILEDs_NAMES.GENDER)}
              value={FORM_FILEDs_NAMES.GENDER_FEMALE}
            />
          </div>
          <p className={styles.error}>{errors.gender?.message}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.EMAIL}>
            {capitalize(FORM_FILEDs_NAMES.EMAIL)}
          </label>
          <input
            type={INPUT_TYPES.EMAIL}
            id={FORM_FILEDs_NAMES.EMAIL}
            {...register(FORM_FILEDs_NAMES.EMAIL)}
          />
          <p className={styles.error}>{errors.email?.message}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.COUNTRY}>
            {capitalize(FORM_FILEDs_NAMES.COUNTRY)}
          </label>
          <Countries
            className={styles.countries_wrapper}
            id={FORM_FILEDs_NAMES.COUNTRY}
            name={FORM_FILEDs_NAMES.COUNTRY}
            register={register}
          />
          <p className={styles.error}>{errors.country?.message}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.IMAGE}>
            {capitalize(FORM_FILEDs_NAMES.IMAGE)}
          </label>
          <input
            type={INPUT_TYPES.FILE}
            id={FORM_FILEDs_NAMES.IMAGE}
            {...register(FORM_FILEDs_NAMES.IMAGE)}
          />
          <p className={styles.error}>{errors.image?.message}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.PASSWORD}>
            {capitalize(FORM_FILEDs_NAMES.PASSWORD)}
          </label>
          <input
            type={INPUT_TYPES.PASSWORD}
            id={FORM_FILEDs_NAMES.PASSWORD}
            {...register(FORM_FILEDs_NAMES.PASSWORD)}
            onInput={onInputPw}
          />
          {pwStrength}
          <p className={styles.error}>{errors.password?.message}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor={FORM_FILEDs_NAMES.REPEAT_PASSWORD}>
            {capitalize(FORM_FILEDs_NAMES.REPEAT_PASSWORD).replace('_', ' ')}
          </label>
          <input
            type={INPUT_TYPES.PASSWORD}
            id={FORM_FILEDs_NAMES.REPEAT_PASSWORD}
            {...register(FORM_FILEDs_NAMES.REPEAT_PASSWORD)}
          />
          <p className={styles.error}>{errors.repeat_password?.message}</p>
        </div>

        <div className={styles.accept}>
          <label htmlFor={FORM_FILEDs_NAMES.ACCEPT_TnC}>
            {capitalize(FORM_FILEDs_NAMES.ACCEPT_TnC)}
          </label>
          <input
            type={INPUT_TYPES.CHECKBOX}
            id={FORM_FILEDs_NAMES.ACCEPT_TnC}
            {...register(FORM_FILEDs_NAMES.ACCEPT_TnC)}
          />
          <p className={styles.error}>{errors.acceptTnC?.message}</p>
        </div>

        <button disabled={!isValid} type={BTN_TYPE}>
          {capitalize(BTN_TYPE)}
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
