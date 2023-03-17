/* eslint-disable no-magic-numbers */

const convertTimestamp = (timestamp) => {
  const milliseconds = timestamp * 1000;
  const date = new Date(milliseconds);

  return date.toLocaleString();
};

export default convertTimestamp;
