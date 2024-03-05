export interface IInitialValues {
  nik: string;
  password: string;
}

export type PropsHandleTextChange = {
  fieldName: keyof IInitialValues;
  value: string;
};
