import { useContext } from 'react';
import Context from '../Context/Context';

function WeatherCard() {
  const {
    temperature,
    cityInfos,
    meteorology,
  } = useContext(Context);

  return (
    <div>
      <h1>
        {cityInfos.name}
        ,
        {' '}
        {cityInfos.country}
      </h1>
      <h2>{meteorology.description}</h2>
      <h2>
        {temperature.temp}
        {' '}
        ºC
      </h2>
      <h3>
        Feels like
        {' '}
        {temperature.feels_like}
      </h3>
    </div>
  );
}

export default WeatherCard;
