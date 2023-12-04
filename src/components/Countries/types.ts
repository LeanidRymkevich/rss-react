import { RefObject } from 'react';

export interface CountriesProps {
  className: string;
  name: string;
  id: string;
  reference?: RefObject<HTMLInputElement>;
}
