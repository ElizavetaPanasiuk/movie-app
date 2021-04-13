import { SET_GENRES_LIST, SET_FILMS_LIST } from './types';

export const store = {
  genresList: [],
  filmsList: [],
};

export function rootReducer(state = store, action) {
  switch (action.type){
    case SET_GENRES_LIST:
      return { ...state, genresList: action.genresList};
    case SET_FILMS_LIST:
      return { ...state, filmsList: action.filmsList};
    default:
      return state;
  }
}