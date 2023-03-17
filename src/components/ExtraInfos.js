import { useContext } from 'react';
import Context from '../Context/Context';
import convertTimestamp from '../utils/convertTimestamp';
import mapIcons from '../utils/mapIcons';

function ExtraInfos() {
  const {
    extrasInfos,
  } = useContext(Context);

  return (
    <div>
      <div>
        <img
          src={ mapIcons('humidity') }
          alt="humidity icon"
          style={ { width: '200px' } }
        />
        <h3>{`${extrasInfos.humidity}%`}</h3>
      </div>
      <div>
        <img
          src={ mapIcons('wind') }
          alt="wind icon"
          style={ { width: '200px' } }
        />
        <h3>{`${extrasInfos.windSpeed}ms`}</h3>
      </div>
      <div>
        <img
          src={ mapIcons('sunrise') }
          alt="sunrise icon"
          style={ { width: '200px' } }
        />
        <h3>{convertTimestamp(extrasInfos.sunrise)}</h3>
      </div>
      <div>
        <img
          src={ mapIcons('sunset') }
          alt="sunset icon"
          style={ { width: '200px' } }
        />
        <h3>{convertTimestamp(extrasInfos.sunset)}</h3>
      </div>
    </div>
  );
}

export default ExtraInfos;
