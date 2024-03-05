import {GenderType} from '../../../models/generalModels';

export interface IInitialValues {
  dob: null | Date;
  gender: null | GenderType;
  preferences: Array<string>;
  allergies: Array<string>;
}

export type PropsHandleTextChange = {
  fieldName: keyof IInitialValues;
  value: string;
};
