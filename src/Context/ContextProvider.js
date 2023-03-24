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
  const [error, setError] = useState(false);

  const handleChange = useCallback(({ target }) => {
    setCityName(target.value);
  }, []);

  const getCity = (lat, lon) => {
    fetchCity(lat, lon)
      .then(({ main, weather, wind, name, sys: { country, sunrise, sunset } }) => {
        try {
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
        } catch (e) {
          setLoading(false);
          setError(true);
        }
      });
  };

  const getCordenates = useCallback(async () => {
    setLoading(true);
    fetchLatAndLong(cityName).then(([data]) => {
      try {
        const lat = data.lat.toFixed(2);
        const lon = data.lon.toFixed(2);

        getCity(lat, lon);
        setError(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
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
      error,
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
      error,
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
