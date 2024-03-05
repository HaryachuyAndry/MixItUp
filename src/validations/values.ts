import emojiRegex from 'emoji-regex';
import * as yup from 'yup';

const required = 'Це поле обовязкове';

export const validationValues = {
  name: yup
    .string()
    .required(required)
    .min(2, 'Мінімальна кількість символів 2')
    .max(20, 'Максимальна кількість символів 20')
    .matches(/^[A-Za-z\u0621-\u064A]+$/, 'Цифри не припустимі')
    .test('phone', 'emojiNotAllowed', v => !v?.match?.(emojiRegex())?.length),
  nik: yup
    .string()
    .required(required)
    .min(2, 'Мінімальна кількість символів 2')
    .max(20, 'Максимальна кількість символів 20')
    .test('phone', 'emojiNotAllowed', v => !v?.match?.(emojiRegex())?.length),
  password: yup
    .string()
    .required(required)
    .min(6, 'Мінімальна кількість символів 6')
    .max(25, 'Максимальна кількість символів 25')
    .test('phone', 'emojiNotAllowed', v => !v?.match?.(emojiRegex())?.length),
  dob: yup.date(),
  gender: yup.string(),
  preferences: yup
    .string()
    .min(2, 'Мінімальна кількість символів 2')
    .max(20, 'Максимальна кількість символів 20'),
  allergies: yup
    .string()
    .min(2, 'Мінімальна кількість символів 2')
    .max(20, 'Максимальна кількість символів 20'),
};
