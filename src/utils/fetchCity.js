import key from '../key/apiKey';

const fetchCity = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${key}`;
  const response = await fetch(url);
  const data = response.json();

  return data;
};

export default fetchCity;
