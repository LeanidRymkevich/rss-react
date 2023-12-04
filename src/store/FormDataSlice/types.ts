import { CustomFormData } from '@src/Validation/Validation';

export interface FormDataItem extends Omit<CustomFormData, 'image'> {
  source: 'Uncontrolled Form' | 'React Hook Form';
}

export interface FormDataState {
  dataItems: FormDataItem[];
}

export const initialState: FormDataState = {
  dataItems: [],
};
