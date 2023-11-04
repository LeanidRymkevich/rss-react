import { Component } from 'react';
import scss from 'src/components/ErrorBoundary/FallbackUI.module.scss';
import styles from 'src/pages/main/main.module.scss';
import Button from 'src/components/UI/Button/Button';

const FALLBACK_MESSAGE =
  'Something goes wrong! To reload page press the button below.';
const BTN_TEXT = 'Reload';

export default class FallbackUI extends Component {
  reload = (): void => {
    window.location.reload();
  };

  render(): JSX.Element {
    return (
      <div className={scss.fallbackUI}>
        <p className={scss.text}>{FALLBACK_MESSAGE}</p>
        <Button
          class={styles.btn}
          text={BTN_TEXT}
          onClickHandler={this.reload}
        />
      </div>
    );
  }
}
