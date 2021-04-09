import React from 'react';
import './Genres.css';

const Genres = ({genresList, renderFilmList, setFilmList}) => {
  return(
    <div className="genres-container">{genresList.map(genre => <div className="genre-item" key={genre.id} 
    onClick={async() => setFilmList(await renderFilmList(genre.id))}>{genre.name}</div>)}</div>
  )
}

export default Genres;