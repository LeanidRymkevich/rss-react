import { RefObject } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { CustomFormData } from '@src/Validation/Validation';

export interface CountriesProps {
  className: string;
  name: string;
  id: string;
  reference?: RefObject<HTMLInputElement>;
  register?: UseFormRegister<CustomFormData>;
}
