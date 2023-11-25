import { FC } from 'react';

import { MyButtonProps } from '@src/components/UI/MyButton/types';

const MyButton: FC<MyButtonProps> = ({
  children,
  ...props
}: MyButtonProps): JSX.Element => {
  return <button {...props}>{children}</button>;
};

export default MyButton;
