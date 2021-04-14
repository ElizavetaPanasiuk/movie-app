import { SET_GENRES_LIST, SET_FILMS_LIST } from './types';
import Requests from './../services/requests';

export const setGenresList = () => {
  return async (dispatch) => {
    const data = await Requests.getGenresList();
    dispatch({
      type: SET_GENRES_LIST,
      genresList: data,
    })
  }
}

export const setFilmsList = (genre_id) => {
  return async (dispatch) => {
    const data = [];

    const genres = await Requests.getGenresList();
    const pagesQuantity = 5;

    const getGenreName = (genre_id) => {
      const genre = genres.find(elem => elem.id === genre_id).name;
      return genre;
    };
    
    const filmPages = new Array(pagesQuantity).fill(1).map((elem, index) => Requests.getFilmPage(genre_id, index + 1));

    await Promise.all(filmPages).then(values => { 
      const results = [];
      values.forEach(elem => results.push(...elem.results));
      results.forEach(film => {
        data.push({
          ...film,
          backdrop_path: Requests.getImage(film.backdrop_path),
          genre_ids: film.genre_ids.map(id => getGenreName(id)),
        });
      }); 
    });

    dispatch({
      type: SET_FILMS_LIST,
      filmsList: data,
    });
  }
}