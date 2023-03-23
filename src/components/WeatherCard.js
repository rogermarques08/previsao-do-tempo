import { useContext } from 'react';
import Context from '../Context/Context';
import '../styles/WeatherCard.css';
import mapIcons from '../utils/mapIcons';

function WeatherCard() {
  const {
    temperature,
    cityInfos,
    meteorology,
    scale,
  } = useContext(Context);

  return (
    <div className="wheater-card-container">
      <h1>
        {cityInfos.name}
        ,
        {' '}
        {cityInfos.country}
      </h1>
      <img
        src={ mapIcons(meteorology.main) }
        alt={ `${meteorology.main}icon` }
        className="icon"
      />
      <div className="description-container">
        <h2>
          {
            meteorology.description[0].toUpperCase()
        + meteorology.description.substring(1)
          }

        </h2>
        <h2>
          {Math.floor(temperature.temp)}
          {' '}
          {scale === 'metric' ? '°C' : '°F'}
        </h2>
      </div>
      <h2>
        Sensação Térmica:
        {' '}
        {Math.floor(temperature.feels_like)}
        {' '}
        {scale === 'metric' ? '°C' : '°F'}
      </h2>
    </div>
  );
}

export default WeatherCard;
