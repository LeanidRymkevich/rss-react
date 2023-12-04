import { FC } from 'react';

import styles from '@src/components/Card/Card.module.css';

import { CardData } from '@src/components/Card/types';

const Card: FC<CardData> = ({ data, id }: CardData): JSX.Element => {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>
        {data.source} Card #{id}
      </h4>
      <p>
        <span>Name:</span> <span>{data.name}</span>
      </p>
      <p>
        <span>Age:</span> <span>{data.age} years</span>
      </p>
      <p>
        <span>Gender:</span> <span>{data.gender}</span>
      </p>
      <p>
        <span>Country:</span> <span>{data.country}</span>
      </p>
      <p>
        <span>Password:</span> <span>{data.password}</span>
      </p>
      <p>
        <span>Accept T&C:</span> <span>{`${data.acceptTnC}`}</span>
      </p>
      <img src={data.image} alt="Card image" />
    </div>
  );
};

export default Card;
