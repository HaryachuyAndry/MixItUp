module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    es2021: true,
  },
  extends: ['@react-native', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
  useTabs: false
};
