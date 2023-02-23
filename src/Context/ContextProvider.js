import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import fetchDefaultCity from '../utils/fetchDefaultCity';
import fetchLatAndLong from '../utils/fetchLatAndLong';
import Context from './Context';

function ContextProvider({ children }) {
  const [cityName, setCityName] = useState('');
  const [temperature, setTemperture] = useState({});
  const [meteorology, setMeteorology] = useState({});
  const [cityInfos, setCityInfos] = useState({});
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({});

  const handleChange = useCallback(({ target }) => {
    setCityName(target.value);
  }, []);

  const getCordenates = useCallback(async () => {
    fetchLatAndLong(cityName).then((data) => {
      console.log(data);
      setCoordinates(data[0]);
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
      coordinates,
    }),
    [
      cityName,
      handleChange,
      temperature,
      meteorology,
      cityInfos,
      loading,
      coordinates,
      getCordenates,
    ],
  );

  useEffect(() => {
    fetchDefaultCity().then(({ main, weather, name, sys: { country } }) => {
      setTemperture(main);
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
