import {axios} from './axios';

export const getListHomeCocktails = () => {
  return axios.get('/cocktails');
};

export const deleteCocktailFromList = (id: string) => {
  return axios.delete(`/cocktail/${id}`);
};
