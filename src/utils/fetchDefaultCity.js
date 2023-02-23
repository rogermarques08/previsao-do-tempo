import key from '../key/apiKey';

const fetchDefaultCity = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=-19.92&lon=-43.94&units=metric&appid=${key}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export default fetchDefaultCity;
