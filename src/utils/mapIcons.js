import brokenClouds from '../icons/brokenClouds.png';
import clearSky from '../icons/clearSky.png';
import humidity from '../icons/humidity.png';
import mist from '../icons/mist.png';
import rain from '../icons/rain.png';
import showerRain from '../icons/showerRain.png';
import snow from '../icons/snow.png';
import sunrise from '../icons/sunrise.png';
import sunset from '../icons/sunset.png';
import thunderstorm from '../icons/thunderstorm.png';
import wind from '../icons/wind.png';
// https://www.flaticon.com/

const icons = {
  Clear: clearSky,
  Clouds: brokenClouds,
  Thunderstorm: thunderstorm,
  Snow: snow,
  Rain: rain,
  Dizzle: showerRain,
  humidity,
  wind,
  sunrise,
  sunset,
};

const mapIcons = (description) => icons[description] || mist;

export default mapIcons;
