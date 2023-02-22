import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import Context from './Context';

function ContextProvider({ children }) {
  //   const [location, setLocation] = useState([]);
  const [city, setCity] = useState('');

  const handleChange = useCallback(({ target }) => {
    setCity(target.value);
  }, []);

  const value = useMemo(
    () => ({
      city,
      handleChange,
    }),
    [city, handleChange],
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
