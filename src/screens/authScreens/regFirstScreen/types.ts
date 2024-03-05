export interface IInitialValues {
  name: string;
  nik: string;
  password: string;
}

export type PropsHandleTextChange = {
  fieldName: keyof IInitialValues;
  value: string;
};
