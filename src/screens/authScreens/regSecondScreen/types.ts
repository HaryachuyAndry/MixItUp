import {GenderType, ProductType} from '../../../models/generalModels';

export interface IInitialValues {
  dob: null | Date;
  gender: null | GenderType;
  preferences: Array<ProductType>;
  allergies: Array<ProductType>;
}

export type PropsHandleTextChange = {
  fieldName: keyof IInitialValues;
  value: any;
};
