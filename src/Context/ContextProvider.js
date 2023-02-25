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
  const [cityInfos, setCityInfos] = useState({});
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState('metric');

  const handleChange = useCallback(({ target }) => {
    setCityName(target.value);
  }, []);

  const getCity = (lat, lon) => {
    fetchCity(lat, lon).then(({ main, weather, name, sys: { country } }) => {
      setTemperture({ temp: main.temp, feels_like: main.feels_like });
      setMeteorology(weather[0]);
      setCityInfos({ name, country });
      setLoading(false);
    });
  };

  const getCordenates = useCallback(async () => {
    setLoading(true);
    fetchLatAndLong(cityName).then((data) => {
      const lat = data[0].lat.toFixed(2);
      const lon = data[0].lon.toFixed(2);

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
    ],
  );

  useEffect(() => {
    fetchDefaultCity().then(({ main, weather, name, sys: { country } }) => {
      setLoading(true);
      setTemperture({ temp: main.temp, feels_like: main.feels_like });
      setMeteorology(weather[0]);
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
