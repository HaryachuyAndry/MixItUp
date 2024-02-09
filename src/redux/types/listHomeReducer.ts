export type HomeListStateType = {
  loading: boolean;
  data: any;
};

export enum HomeListCocktailsActionTypes {
  HOME_LIST__COCKTAILS__LOADED = 'LIST__COCKTAILS__LOADED',
  HOME_LIST__COCKTAILS__LOADING = 'LIST__COCKTAILS__LOADING',
}

interface CocktailsLoadingAction {
  type: HomeListCocktailsActionTypes.HOME_LIST__COCKTAILS__LOADING;
  payload: boolean;
}

interface GetListCocktailsAction {
  type: HomeListCocktailsActionTypes.HOME_LIST__COCKTAILS__LOADED;
  payload: any;
}

export type HomeListCocktailsType =
  | CocktailsLoadingAction
  | GetListCocktailsAction;
