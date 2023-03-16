import brokenClouds from '../icons/brokenClouds.png';
import clearSky from '../icons/clearSky.png';
import fewClouds from '../icons/fewClouds.png';
import mist from '../icons/mist.png';
import rain from '../icons/rain.png';
import scatteredClouds from '../icons/scatteredClouds.png';
import showerRain from '../icons/showerRain.png';
import snow from '../icons/snow.png';
import thunderstorm from '../icons/thunderstorm.png';
// https://www.flaticon.com/

const icons = {
  'clear sky': clearSky,
  'few clouds': fewClouds,
  'scattered clouds': scatteredClouds,
  'broken clouds': brokenClouds,
  'shower rain': showerRain,
  rain,
  thunderstorm,
  snow,
  mist,
};

const mapIcons = (description) => icons[description];

export default mapIcons;
