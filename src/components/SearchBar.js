import { useContext } from 'react';
import Context from '../Context/Context';

function SearchBar() {
  const {
    cityName,
    handleChange,
    getCordenates,
  } = useContext(Context);
  return (
    <div>
      <input
        type="text"
        value={ cityName }
        onChange={ handleChange }
        onKeyPress={ (e) => {
          if (e.key === 'Enter') { getCordenates(); }
        } }
      />
      <button type="button" onClick={ getCordenates }>
        Pesquisar
      </button>
    </div>
  );
}

export default SearchBar;
