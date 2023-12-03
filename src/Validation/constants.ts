const NAME_RE: RegExp = /[A-Z].*/;
const PW_LOWERCASE_LETTER_RE = /.*[a-z]+.*/;
const PW_UPPERCASE_LETTER_RE = /.*[A-Z]+.*/;
const PW_NUMBER_RE = /.*[0-9]+.*/;
const PW_SPECIAL_CHAR_RE = /.*[^\w\s]+.*/;

const ALLOWED_IMG_TYPES: string[] = ['image/jpeg', 'image/png'];
const ALLOWED_IMAGE_WIDTH = 1920;
const ALLOWED_IMAGE_HEIGHT = 1080;
const ALLOWED_IMAGE_SIZE = ALLOWED_IMAGE_WIDTH * ALLOWED_IMAGE_HEIGHT;

const REQUIRED_MESSAGE = 'This field is required';
const FIRST_UPPERCASE_LETTER_MASSAGE =
  'The first name letter should be uppercase';
const POSITIVE_AGE_MESSAGE = 'Age should be positive number';
const EMAIL_MESSAGE = 'Enter valid email';
const COUNTRIES_MESSAGE = 'You must choose country from the given list';
const INVALID_IMG_TYPE_MESSAGE =
  'Only "jpeg" and "png" image types are allowed';
const INVALID_IMG_SIZE_MESSAGE = `Image size must be less or equal than ${ALLOWED_IMAGE_WIDTH}x${ALLOWED_IMAGE_HEIGHT}`;
const CONFIRM_MESSAGE = 'To continue you must accept terms and conditions';
const PW_LOWERCASE_LETTER_MSG =
  'Password should include at least 1 lowercase letter';
const PW_UPPERCASE_LETTER_MSG =
  'Password should include at least 1 uppercase letter';
const PW_NUMBER_LETTER_MSG = 'Password should include at least 1 number';
const PW_SPECIAL_CHAR_MSG = 'Password should include at least 1 special char';
const PASSWORD_NOT_MATCH_MESSAGE = 'Entered passwords should match each other';

const IMG_TYPES_TEST_NAME = 'Image types test';
const IMG_SIZE_TEST_NAME = 'Image size test';
const PW_MATCH_TEST_NAME = 'Password match test';

export {
  NAME_RE,
  REQUIRED_MESSAGE,
  FIRST_UPPERCASE_LETTER_MASSAGE,
  POSITIVE_AGE_MESSAGE,
  EMAIL_MESSAGE,
  COUNTRIES_MESSAGE,
  INVALID_IMG_TYPE_MESSAGE,
  IMG_TYPES_TEST_NAME,
  ALLOWED_IMG_TYPES,
  IMG_SIZE_TEST_NAME,
  ALLOWED_IMAGE_SIZE,
  INVALID_IMG_SIZE_MESSAGE,
  CONFIRM_MESSAGE,
  PW_LOWERCASE_LETTER_RE,
  PW_UPPERCASE_LETTER_RE,
  PW_NUMBER_RE,
  PW_SPECIAL_CHAR_RE,
  PW_LOWERCASE_LETTER_MSG,
  PW_UPPERCASE_LETTER_MSG,
  PW_NUMBER_LETTER_MSG,
  PW_SPECIAL_CHAR_MSG,
  PASSWORD_NOT_MATCH_MESSAGE,
  PW_MATCH_TEST_NAME,
};
