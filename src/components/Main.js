import { useContext } from 'react';
import Context from '../Context/Context';
import WeatherCard from './WeatherCard';

function Main() {
  const {
    cityName,
    handleChange,
    loading,
    getCordenates,
  } = useContext(Context);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
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
      <WeatherCard />
    </main>
  );
}

export default Main;
