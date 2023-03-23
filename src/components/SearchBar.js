import { useContext } from 'react';
import Context from '../Context/Context';
import SearchIcon from '../icons/search.png';
import '../styles/SearchBar.css';

function SearchBar() {
  const {
    cityName,
    handleChange,
    getCordenates,
  } = useContext(Context);
  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={ cityName }
        placeholder="Pesquisar"
        onChange={ handleChange }
        onKeyPress={ (e) => {
          if (e.key === 'Enter') { getCordenates(); }
        } }
      />
      <button
        type="button"
        onClick={ getCordenates }
      >
        <img src={ SearchIcon } alt="search icon" className="search-icon" />
        {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Royyan Wijaya - Flaticon</a> */}
      </button>
    </div>
  );
}

export default SearchBar;
