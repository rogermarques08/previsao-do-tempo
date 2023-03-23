import { useContext } from 'react';
import Context from '../Context/Context';
import '../styles/Loading.css';
import '../styles/MainStyle.css';
import ConverterButtons from './ConverterButtons';
import ExtraInfos from './ExtraInfos';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';

function Main() {
  const {
    loading,
  } = useContext(Context);

  if (loading) {
    return (
      <div className="container">
        <div className="cloud front">
          <span className="left-front" />
          <span className="right-front" />
        </div>
        <span className="sun sunshine" />
        <span className="sun" />
        <div className="cloud back">
          <span className="left-back" />
          <span className="right-back" />
        </div>
      </div>
    );
  }

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
