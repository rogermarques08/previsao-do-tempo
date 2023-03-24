import NotFoundIcon from '../icons/NotFound.png';
import '../styles/NotFound.css';
import SearchBar from './SearchBar';

function NotFound() {
  return (
    <div className="not-found-container">
      <img src={ NotFoundIcon } alt="not found icon" className="not-found-icon" />
      <h1 className="text">
        Não foi possível encontrar a cidade pesquisada
      </h1>
      <SearchBar />
    </div>
  );
}

export default NotFound;
