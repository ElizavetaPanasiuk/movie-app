import Genres from './components/Genres';
import FilmList from './components/FilmList';
import './App.css';
import { useState } from 'react';

const App = (props) => {
  const [filmList, setFilmList] = useState([]);
  
  return (
    <div className="app-container">
      <Genres genresList={props.genresList} renderFilmList={props.renderFilmList} setFilmList={setFilmList} />
      <FilmList filmList={filmList} />
    </div>
  );
}

export default App;