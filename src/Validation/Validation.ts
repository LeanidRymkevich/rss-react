import * as yup from 'yup';

import { FORM_FILEDs_NAMES, Gender } from '@src/pages/UncontrolledForm/types';

import {
  NAME_RE,
  REQUIRED_MESSAGE,
  FIRST_UPPERCASE_LETTER_MASSAGE,
  POSITIVE_AGE_MESSAGE,
  EMAIL_MESSAGE,
  COUNTRIES_MESSAGE,
  IMG_TYPES_TEST_NAME,
  INVALID_IMG_TYPE_MESSAGE,
  ALLOWED_IMG_TYPES,
  IMG_SIZE_TEST_NAME,
  ALLOWED_IMAGE_SIZE,
  INVALID_IMG_SIZE_MESSAGE,
  CONFIRM_MESSAGE,
  PW_LOWERCASE_LETTER_MSG,
  PW_LOWERCASE_LETTER_RE,
  PW_NUMBER_LETTER_MSG,
  PW_NUMBER_RE,
  PW_SPECIAL_CHAR_MSG,
  PW_SPECIAL_CHAR_RE,
  PW_UPPERCASE_LETTER_MSG,
  PW_UPPERCASE_LETTER_RE,
  PASSWORD_NOT_MATCH_MESSAGE,
  PW_MATCH_TEST_NAME,
} from '@src/Validation/constants';
import { countries } from '@src/store/CountriesSlice/constants';

const schema = yup.object().shape({
  name: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .matches(NAME_RE, FIRST_UPPERCASE_LETTER_MASSAGE),
  age: yup.number().required(REQUIRED_MESSAGE).positive(POSITIVE_AGE_MESSAGE),
  gender: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .oneOf([FORM_FILEDs_NAMES.GENDER_MALE, FORM_FILEDs_NAMES.GENDER_FEMALE]),
  email: yup.string().email(EMAIL_MESSAGE).required(REQUIRED_MESSAGE),
  country: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .oneOf(countries, COUNTRIES_MESSAGE),
  image: yup
    .mixed()
    .required(REQUIRED_MESSAGE)
    .test(IMG_SIZE_TEST_NAME, INVALID_IMG_SIZE_MESSAGE, (image): boolean => {
      if (image instanceof File) {
        return image.size <= ALLOWED_IMAGE_SIZE;
      }
      return false;
    })
    .test(IMG_TYPES_TEST_NAME, INVALID_IMG_TYPE_MESSAGE, (image): boolean => {
      if (image instanceof File) {
        return ALLOWED_IMG_TYPES.indexOf(image.type) !== -1;
      }
      return false;
    }),
  password: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .matches(PW_LOWERCASE_LETTER_RE, PW_LOWERCASE_LETTER_MSG)
    .matches(PW_UPPERCASE_LETTER_RE, PW_UPPERCASE_LETTER_MSG)
    .matches(PW_NUMBER_RE, PW_NUMBER_LETTER_MSG)
    .matches(PW_SPECIAL_CHAR_RE, PW_SPECIAL_CHAR_MSG),
  repeat_password: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .test(PW_MATCH_TEST_NAME, PASSWORD_NOT_MATCH_MESSAGE, function (value) {
      return this.parent.password === value;
    }),
  acceptTnC: yup.bool().required(REQUIRED_MESSAGE).isTrue(CONFIRM_MESSAGE),
});

export interface CustomFormData extends yup.InferType<typeof schema> {
  name: string;
  age: number;
  gender: Gender;
  email: string;
  country: string;
  image: File;
  password: string;
  repeat_password: string;
  acceptTnC: true;
}

export default schema;
