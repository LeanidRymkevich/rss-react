import { SelectParams } from 'src/components/UI/Select/types';

const SEARCH_PLACEHOLDER = 'Write your request here';
const ERROR_BTN_TEXT = 'Throw an error';

const SELECT_PARAMS: Pick<SelectParams, 'defaultOption' | 'options'> = {
  defaultOption: 'News per page',
  options: [
    { name: '5', value: '5' },
    { name: '10', value: '10' },
    { name: '20', value: '20' },
  ],
};

export { SEARCH_PLACEHOLDER, ERROR_BTN_TEXT, SELECT_PARAMS };
