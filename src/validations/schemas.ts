import * as yup from 'yup';
import {validationValues} from './values';

export const authSchema = yup.object().shape({
  nik: validationValues.nik,
  password: validationValues.password,
});

export const regFirstScreenSchema = yup.object().shape({
  name: validationValues.name,
  nik: validationValues.password,
  password: validationValues.password,
});

export const regSecondScreenSchema = yup.object().shape({
  dob: validationValues.name,
  gender: validationValues.password,
  preferences: validationValues.password,
  allergies: validationValues.name,
});
