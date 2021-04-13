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
    let page = 1;

    const genres = await Requests.getGenresList(); // как здесь обратиться к genresList

    const getGenreName = (genre_id) => {
      const genre = genres.find(elem => elem.id === genre_id).name;
      return genre;
    };

    while(data.length < 100){
      const filmsObject = await Requests.getFilmPage(page);

      filmsObject.results.forEach(film => {
        if(film.genre_ids.includes(genre_id) && data.length < 100){
          data.push({
            ...film,
            backdrop_path: Requests.getImage(film.backdrop_path),
            genre_ids: film.genre_ids.map(id => getGenreName(id)),
          });
        }
      });
      
      page++;
    }

    dispatch({
      type: SET_FILMS_LIST,
      filmsList: data,
    });
  }
}