/* eslint-disable no-magic-numbers */
import { useContext, useState } from 'react';
import Context from '../Context/Context';

function ConverterButtons() {
  const {
    temperature,
    setTemperture,
    setScale,
  } = useContext(Context);

  const [cButtonDisabled, setCButtonDisabled] = useState(true);
  const [fButtonDisabled, setFButtonDisabled] = useState(false);

  const convertTemperature = ({ target }) => {
    const { value } = target;

    if (value === 'f') {
      setFButtonDisabled(true);
      setCButtonDisabled(false);
      setScale('imperial');

      const temp = (temperature.temp * 1.8 + 32).toFixed(2);
      const feelsLike = (temperature.feels_like * 1.8 + 32).toFixed(2);
      return setTemperture({ temp, feels_like: feelsLike });
    }

    setFButtonDisabled(false);
    setCButtonDisabled(true);
    setScale('metric');

    const temp = ((temperature.temp - 32) / 1.8).toFixed(2);
    const feelsLike = ((temperature.feels_like - 32) / 1.8).toFixed(2);
    return setTemperture({ temp, feels_like: feelsLike });
  };

  return (
    <div>
      <button
        type="button"
        value="c"
        disabled={ cButtonDisabled }
        onClick={ convertTemperature }
      >
        Celsius
      </button>
      <button
        type="button"
        value="f"
        disabled={ fButtonDisabled }
        onClick={ convertTemperature }
      >
        Fahrenheit
      </button>
    </div>
  );
}

export default ConverterButtons;
