import post from './../api';
import config from './../../config';

export default class Requests{
  static async getGenresList(){
    const response = await post(config.genreURL);
    const genresList = response.genres;
    return genresList;
  }

  static async getFilmPage(genre_id, page){
    const filmsRequest = await post(`${config.movieURL(genre_id, page)}`);
    return filmsRequest;
  }

  static getImage(path){
    return `${config.imageURL}${path}`;
  }
}