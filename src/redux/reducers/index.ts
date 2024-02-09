import {combineReducers} from 'redux';
import {ListHomeReducer} from './listHomeReducer';

export const rootReducer = combineReducers({
  ListHomeReducer: ListHomeReducer,
});
