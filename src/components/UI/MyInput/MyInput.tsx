import { FC } from 'react';

import { MyInputProps } from '@src/components/UI/MyInput/types';

const MyInput: FC<MyInputProps> = (props: MyInputProps): JSX.Element => {
  return <input {...props}></input>;
};

export default MyInput;
