import { RefObject } from 'react';
import { ValidationError } from 'yup';

import { FORM_FILEDs_NAMES } from '@src/pages/UncontrolledForm/types';

export interface FormInputs {
  nameInput: RefObject<HTMLInputElement>;
  ageInput: RefObject<HTMLInputElement>;
  maleInput: RefObject<HTMLInputElement>;
  femaleInput: RefObject<HTMLInputElement>;
  emailInput: RefObject<HTMLInputElement>;
  countryInput: RefObject<HTMLInputElement>;
  imageInput: RefObject<HTMLInputElement>;
  passwordInput: RefObject<HTMLInputElement>;
  repeatPasswordInput: RefObject<HTMLInputElement>;
  acceptInput: RefObject<HTMLInputElement>;
}

export interface FormInputsValues {
  name: string | undefined;
  age: string | undefined;
  gender: string | undefined;
  email: string | undefined;
  country: string | undefined;
  image: File | undefined;
  password: string | undefined;
  repeat_password: string | undefined;
  acceptTnC: boolean | undefined;
}

export interface FormsErrorMessages {
  [key: string]: string[];
  name: string[];
  age: string[];
  gender: string[];
  email: string[];
  country: string[];
  image: string[];
  password: string[];
  repeat_password: string[];
  acceptTnC: string[];
}

const initialErrors: FormsErrorMessages = {
  name: [],
  age: [],
  gender: [],
  email: [],
  country: [],
  image: [],
  password: [],
  repeat_password: [],
  acceptTnC: [],
};

const getFormInputsValues = (inputs: FormInputs): FormInputsValues => {
  const gender: string | undefined = inputs.maleInput.current?.checked
    ? FORM_FILEDs_NAMES.GENDER_MALE
    : inputs.femaleInput.current?.checked
      ? FORM_FILEDs_NAMES.GENDER_FEMALE
      : undefined;

  return {
    name: inputs.nameInput.current?.value,
    age: inputs.ageInput.current?.value || '0',
    gender,
    email: inputs.emailInput.current?.value,
    country: inputs.countryInput.current?.value,
    image: inputs.imageInput.current?.files![0],
    password: inputs.passwordInput.current?.value,
    repeat_password: inputs.repeatPasswordInput.current?.value,
    acceptTnC: inputs.acceptInput.current?.checked,
  };
};

const getFormErrorMessages = (error: ValidationError): FormsErrorMessages => {
  const result: FormsErrorMessages = {
    name: [],
    age: [],
    gender: [],
    email: [],
    country: [],
    image: [],
    password: [],
    repeat_password: [],
    acceptTnC: [],
  };
  error.inner.forEach((item: ValidationError): void => {
    const path: string | undefined = item.path;
    if (path) {
      result[path].push(item.message);
    }
  });
  return result;
};

const hasErrors = (errorsObj: FormsErrorMessages): boolean => {
  let result = false;
  for (const item of Object.values(errorsObj)) {
    if (item.length !== 0) {
      result = true;
      break;
    }
  }
  return result;
};

export { getFormInputsValues, initialErrors, getFormErrorMessages, hasErrors };
