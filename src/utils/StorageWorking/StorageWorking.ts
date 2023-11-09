import { DEFAULT_STATE, State } from 'src/utils/StorageWorking/types';

const loadState = (): State => {
  const state: State = DEFAULT_STATE;

  Object.keys(DEFAULT_STATE).forEach((key: string): void => {
    const value: string | null = localStorage.getItem(key);
    if (value) {
      state[key] = value;
    }
  });

  return state;
};

const state: State = loadState();

const setRecord = (key: keyof State, value: string): void => {
  state[key] = value;
};

window.addEventListener('beforeunload', (): void => {
  Object.entries(state).forEach(([key, value]): void => {
    localStorage.setItem(key, value);
  });
});

export { state, setRecord };
