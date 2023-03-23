import key from '../key/apiKey';

const fetchLatAndLong = async (city) => {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export default fetchLatAndLong;
