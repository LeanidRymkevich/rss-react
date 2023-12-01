import { FC } from 'react';

import styles from '@src/components/Dropdown/Dropdown.module.css';

import { DropdownProps } from '@src/components/Dropdown/types';

const Dropdown: FC<DropdownProps> = ({
  items,
  onClick,
}: DropdownProps): JSX.Element => {
  return (
    <div className={styles.dropdown}>
      {items.map((item: string, idx: number): JSX.Element => {
        return (
          <p className={styles.item} key={idx} onClick={onClick}>
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default Dropdown;
