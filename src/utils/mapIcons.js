import brokenClouds from '../icons/brokenClouds.png';
import clearSky from '../icons/clearSky.png';
import rain from '../icons/rain.png';
import showerRain from '../icons/showerRain.png';
import snow from '../icons/snow.png';
import thunderstorm from '../icons/thunderstorm.png';
// https://www.flaticon.com/

const icons = {
  Clear: clearSky,
  Clouds: brokenClouds,
  Thunderstorm: thunderstorm,
  Snow: snow,
  Rain: rain,
  Dizzle: showerRain,
};

const mapIcons = (description) => icons[description] || mist;

export default mapIcons;
