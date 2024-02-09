import {Dispatch} from 'react';
import {
  HomeListCocktailsType,
  HomeListCocktailsActionTypes,
} from '../types/listHomeReducer';
import {
  deleteCocktailFromList,
  getListHomeCocktails,
} from '../../api/listCoctails';

export const fetchListHomeCocktails = (page = 1) => {
  return async (dispatch: Dispatch<HomeListCocktailsType>) => {
    try {
      dispatch({
        type: HomeListCocktailsActionTypes.HOME_LIST__COCKTAILS__LOADING,
        payload: true,
      });

      const response = await getListHomeCocktails();

      dispatch({
        type: HomeListCocktailsActionTypes.HOME_LIST__COCKTAILS__LOADED,
        payload: response.data,
      });

      dispatch({
        type: HomeListCocktailsActionTypes.HOME_LIST__COCKTAILS__LOADING,
        payload: true,
      });
    } catch (error) {
      console.error('ERROR FETCHING LIST HOME COCKTAILS', error);
    }
  };
};
