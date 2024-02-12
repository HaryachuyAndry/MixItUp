import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    height: 46,
    width: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
  },
  errorMessage: {
    color: '#a83232',
    height: 0,
  },
  errorMessageActive: {
    height: 18,
  },
});
