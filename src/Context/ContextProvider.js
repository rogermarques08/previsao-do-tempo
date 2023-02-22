import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import Context from './Context';

function ContextProvider({ children }) {
  //   const [location, setLocation] = useState([]);
  const [cityName, setCityName] = useState('');

  const handleChange = useCallback(({ target }) => {
    setCityName(target.value);
  }, []);

  const value = useMemo(
    () => ({
      cityName,
      handleChange,
    }),
    [cityName, handleChange],
  );

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
