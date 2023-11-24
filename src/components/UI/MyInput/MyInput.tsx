import { ReactNode } from 'react';
import { MyInputProps } from '@src/components/UI/MyInput/types';

const MyInput = (props: MyInputProps): ReactNode => {
  return <input {...props}></input>;
};

export default MyInput;
