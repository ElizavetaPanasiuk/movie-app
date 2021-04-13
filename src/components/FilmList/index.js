import React from 'react';
import ListItem from '../ListItem';
import './FilmList.css';
import { useSelector } from 'react-redux';

const FilmList = () => {
  const films = useSelector(store => store.filmsList);

  return(
    <div className="films-container">
      {films.map((film) => <ListItem name={film.original_title} image={film.backdrop_path} 
        description={film.overview} genres={film.genre_ids} key={`${film.id}${film.original_title}`}/>)}
    </div>
  )
}

export default FilmList;