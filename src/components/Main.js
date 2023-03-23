import { useContext } from 'react';
import Context from '../Context/Context';
import ConverterButtons from './ConverterButtons';
import ExtraInfos from './ExtraInfos';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';

function Main() {
  const {
    loading,
  } = useContext(Context);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <SearchBar />
      <WeatherCard />
      <ExtraInfos />
      <ConverterButtons />
    </main>
  );
}

export default Main;
