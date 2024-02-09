import {useDispatch} from 'react-redux';
import {AppDispatch} from '../types/storeTypes';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions/index';

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return bindActionCreators(ActionCreators, dispatch);
};
