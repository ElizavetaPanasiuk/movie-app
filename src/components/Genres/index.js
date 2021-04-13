import React from 'react';
import './Genres.css';
import {setGenresList, setFilmsList} from '../../store/actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

const Genres = () => {
  const dispatch = useDispatch();
  const genres = useSelector(store => store.genresList);
  useEffect(() =>  dispatch(setGenresList()), []);

  return(
    <div className="genres-container">{genres.map(genre => <div className="genre-item" key={genre.id} 
    onClick={() => dispatch(setFilmsList(genre.id))}>{genre.name}</div>)}</div>
  )
}

export default Genres;