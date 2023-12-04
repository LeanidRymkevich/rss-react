import { FC } from 'react';

import styles from '@src/pages/UncontrolledForm/UncontrolledForm.module.css';

const WEAK_PW_LENGTH = 5;
const MIDDLE_PW_LENGTH = 8;

const PasswordStrength: FC<string> = (value: string): JSX.Element | null => {
  if (!value) return null;

  let message: string;
  let color: string;

  if (value.length <= WEAK_PW_LENGTH) {
    message = 'Weak password';
    color = 'orange';
  } else if (value.length <= MIDDLE_PW_LENGTH) {
    message = 'Middle password';
    color = 'yellow';
  } else {
    message = 'Strong password';
    color = 'green';
  }

  return (
    <p
      className={styles.error}
      style={{
        color,
      }}
    >
      {message}
    </p>
  );
};

export default PasswordStrength;
