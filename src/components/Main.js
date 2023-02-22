import { useContext } from 'react';
import Context from '../Context/Context';

function Main() {
  const { cityName, handleChange } = useContext(Context);

  return (
    <>
      <input type="text" value={ cityName } onChange={ handleChange } />
      <button type="button">Pesquisar</button>
    </>

  );
}

export default Main;
