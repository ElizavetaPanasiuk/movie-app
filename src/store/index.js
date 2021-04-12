import { SET_GENRES_LIST, SET_FILMS_LIST } from './types';

const initialState = {
  genresList: [],
  filmsList: [],
};

export default function rootreducer(state = initialState, action) {
  switch (action.type){
    case SET_GENRES_LIST:
      return { ... state, genresList: action.genresList};
    case SET_FILMS_LIST:
      return { ...state, filmsList: action.filmsList};
    default:
      return state;
  }
}