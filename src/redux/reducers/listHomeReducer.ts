import {
  HomeListCocktailsType,
  HomeListCocktailsActionTypes,
  HomeListStateType,
} from '../types/listHomeReducer';

const initState: HomeListStateType = {
  loading: true,
  data: null,
};

export const ListHomeReducer = (
  state = initState,
  action: HomeListCocktailsType,
): HomeListStateType => {
  switch (action.type) {
    case HomeListCocktailsActionTypes.HOME_LIST__COCKTAILS__LOADING:
      return {...state, loading: action.payload};
    case HomeListCocktailsActionTypes.HOME_LIST__COCKTAILS__LOADED:
      return {...state, data: action.payload};
    default:
      return state;
  }
};
