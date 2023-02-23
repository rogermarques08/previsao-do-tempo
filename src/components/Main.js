import { useContext } from 'react';
import Context from '../Context/Context';

function Main() {
  const {
    cityName,
    handleChange,
    temperature,
    cityInfos,
    meteorology,
    loading,
    // coordinates,
    getCordenates,
  } = useContext(Context);

  if (loading) return <p>Loading...</p>;

  return (
    <>
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
      <div>
        <h1>
          {cityInfos.name}
          ,
          {' '}
          {cityInfos.country}
        </h1>
        <h2>{meteorology.description}</h2>
        <h2>{temperature.temp}</h2>
        <h3>
          Feels like
          {' '}
          {temperature.feels_like}
        </h3>
      </div>
    </>
  );
}

export default Main;
