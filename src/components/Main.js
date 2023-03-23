import { useContext } from 'react';
import Context from '../Context/Context';
import '../styles/MainStyle.css';
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
    <main className="main">
      <SearchBar />
      <ConverterButtons />
      <div className="weather-container">
        <WeatherCard />
        <ExtraInfos />
      </div>
    </main>
  );
}

export default Main;
