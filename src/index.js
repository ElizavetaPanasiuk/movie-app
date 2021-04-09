import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Requests from './services/requests';

const renderPage = async() => {
  const genresList = await Requests.getGenresList();
  
  const getGenreName = (genre_id) => {
    const genre = genresList.find(elem => elem.id === genre_id).name;
    return genre;
  } 

  const renderFilmList = async(genre_id) => {
    const filmsList = [];
    let page = 1;

    while(filmsList.length < 100){
      const filmsObject = await Requests.getFilmPage(page);

      filmsObject.results.forEach(film => {
        if(film.genre_ids.includes(genre_id) && filmsList.length < 100){
          filmsList.push({
            ...film,
            backdrop_path: Requests.getImage(film.backdrop_path),
            genre_ids: film.genre_ids.map(id => getGenreName(id)),
          });
        }
      })
      
      page++;
    }
    
    return filmsList;
  }

  ReactDOM.render(<App genresList={ genresList} renderFilmList={renderFilmList} />, document.getElementById('root'));
}

renderPage();