import React from 'react';
import ListItem from './ListItem';
import './FilmList.css';

const FilmList = ({filmList}) => {
  return(
    <div className="films-container">
      {filmList.map((film) => <ListItem name={film.original_title} image={film.backdrop_path} 
        description={film.overview} genres={film.genre_ids} key={`${film.id}${film.original_title}`}/>)}
    </div>
  )
}

export default FilmList;