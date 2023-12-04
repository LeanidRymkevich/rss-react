import { CustomFormData } from '@src/Validation/Validation';

export type FormType = 'Uncontrolled Form' | 'React Hook Form';

export interface FormDataItem extends Omit<CustomFormData, 'image'> {
  source: FormType;
  image: string;
}

export interface FormDataState {
  dataItems: FormDataItem[];
}

export const initialState: FormDataState = {
  dataItems: [],
};
