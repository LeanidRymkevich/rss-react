import { Component } from 'react';
import styles from 'src/components/UI/Loader/Loader.module.scss';

export default class Loader extends Component {
  render(): JSX.Element {
    return (
      <div className={styles.loader_wrapper}>
        <div className={styles.loader}></div>
      </div>
    );
  }
}
