import Genres from './components/Genres';
import FilmList from './components/FilmList';
import './App.css';


const App = () => {
  return (
    <div className="app-container">
      <Genres />
      <FilmList />
    </div>
  );
}

export default App;