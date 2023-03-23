import { useContext } from 'react';
import Context from '../Context/Context';
import '../styles/ExtraInfos.css';
import '../styles/WeatherCard.css';
import convertTimestamp from '../utils/convertTimestamp';
import mapIcons from '../utils/mapIcons';

function ExtraInfos() {
  const {
    extrasInfos,
  } = useContext(Context);

  return (
    <div className="extra-infos-container">
      <div className="extra-infos-card">
        <h3>Humidade :</h3>
        <img
          src={ mapIcons('humidity') }
          alt="humidity icon"
          className="extra-icons"
        />
        <h3>{`${extrasInfos.humidity}%`}</h3>
      </div>
      <div className="extra-infos-card">
        <h3>Vento :</h3>
        <img
          src={ mapIcons('wind') }
          alt="wind icon"
          className="extra-icons"
        />
        <h3>{`${extrasInfos.windSpeed}ms`}</h3>
      </div>
      <div className="extra-infos-card">
        <h3>Nascer do Sol : </h3>
        <img
          src={ mapIcons('sunrise') }
          alt="sunrise icon"
          className="extra-icons"
        />
        <h3>
          {`${convertTimestamp(extrasInfos.sunrise).split(',')[1]} (GMT-3)`}
        </h3>
      </div>
      <div className="extra-infos-card">
        <h3>Pôr do Sol :</h3>
        <img
          src={ mapIcons('sunset') }
          alt="sunset icon"
          className="extra-icons"
        />
        <h3>
          {` ${convertTimestamp(extrasInfos.sunset).split(',')[1]} (GMT-3)`}
        </h3>
      </div>
    </div>
  );
}

export default ExtraInfos;
