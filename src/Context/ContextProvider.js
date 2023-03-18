import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import fetchCity from '../utils/fetchCity';
import fetchDefaultCity from '../utils/fetchDefaultCity';
import fetchLatAndLong from '../utils/fetchLatAndLong';
import Context from './Context';

function ContextProvider({ children }) {
  const [cityName, setCityName] = useState('');
  const [temperature, setTemperture] = useState({});
  const [meteorology, setMeteorology] = useState({});
  const [extrasInfos, setExtrasInfos] = useState({});
  const [cityInfos, setCityInfos] = useState({});
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState('metric');

  const handleChange = useCallback(({ target }) => {
    setCityName(target.value);
  }, []);

  const getCity = (lat, lon) => {
    fetchCity(lat, lon)
      .then(({ main, weather, wind, name, sys: { country, sunrise, sunset } }) => {
        setTemperture({ temp: main.temp, feels_like: main.feels_like });
        setMeteorology(weather[0]);
        setExtrasInfos({
          humidity: main.humidity,
          windSpeed: wind.speed,
          sunrise,
          sunset,
        });
        setCityInfos({ name, country });
        setLoading(false);
      });
  };

  const getCordenates = useCallback(async () => {
    setLoading(true);
    fetchLatAndLong(cityName).then(([data]) => {
      console.log(data);
      const lat = data.lat.toFixed(2);
      const lon = data.lon.toFixed(2);

      getCity(lat, lon);
    });
  }, [cityName]);

  const value = useMemo(
    () => ({
      cityName,
      handleChange,
      temperature,
      meteorology,
      cityInfos,
      loading,
      getCordenates,
      setTemperture,
      setScale,
      scale,
      extrasInfos,
    }),
    [
      cityName,
      handleChange,
      temperature,
      meteorology,
      cityInfos,
      loading,
      getCordenates,
      scale,
      extrasInfos,
    ],
  );

  useEffect(() => {
    fetchDefaultCity()
      .then(({ main, weather, wind, name, sys: { country, sunrise, sunset } }) => {
        setLoading(true);
        setTemperture({ temp: main.temp, feels_like: main.feels_like });
        setMeteorology(weather[0]);
        setExtrasInfos({
          humidity: main.humidity,
          windSpeed: wind.speed,
          sunrise,
          sunset,
        });
        setCityInfos({ name, country });
        setLoading(false);
      });
  }, []);

  return <Context.Provider value={ value }>{children}</Context.Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
